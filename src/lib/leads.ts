import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(30)
    .regex(/^[0-9()+\-\s]+$/, "Telefone inválido"),
  visa: z.string().min(1, "Selecione o tipo de visto"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  source: z.string().max(100).optional().or(z.literal("")),
  utmSource: z.string().max(100).optional().or(z.literal("")),
  utmMedium: z.string().max(100).optional().or(z.literal("")),
  utmCampaign: z.string().max(100).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

function getEnv(key: string): string | undefined {
  try {
    return (process.env[key] || import.meta.env?.[key]) as string | undefined;
  } catch {
    return undefined;
  }
}

function formatWhatsappMessage(lead: LeadInput): string {
  const parts = [`Olá, sou ${lead.name}.`, `Telefone: ${lead.phone}.`, `Interesse: ${lead.visa}.`];
  if (lead.message) parts.push(`Mensagem: ${lead.message}`);
  return encodeURIComponent(parts.join(" "));
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const parsed = leadSchema.safeParse(data);
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Dados inválidos";
      throw new Error(message);
    }
    return parsed.data;
  })
  .handler(async ({ data }) => {
    const lead = data;
    const timestamp = new Date().toISOString();

    const payload = {
      ...lead,
      timestamp,
      site: "costa-silva-site",
    };

    // 1. Log local para debugging/auditoria (não expõe dados sensíveis em produção)
    console.log("[lead] received", {
      name: lead.name,
      phone: lead.phone,
      visa: lead.visa,
      timestamp,
    });

    // 2. Enviar para webhook externo se configurado (Zapier, Make, n8n, CRM)
    const webhookUrl = getEnv("LEAD_WEBHOOK_URL");
    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          console.error("[lead] webhook failed", response.status, await response.text());
        }
      } catch (error) {
        console.error("[lead] webhook error", error);
      }
    }

    // 3. Enviar e-mail de notificação se Resend configurado
    const resendApiKey = getEnv("RESEND_API_KEY");
    const leadEmail = getEnv("LEAD_EMAIL");
    if (resendApiKey && leadEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Costa & Souza <noreply@costaesouza.com.br>",
            to: leadEmail,
            subject: "Novo lead — Costa & Souza",
            text: `Novo lead recebido:\n\nNome: ${lead.name}\nTelefone: ${lead.phone}\nTipo de visto: ${lead.visa}\nMensagem: ${lead.message || "Não informada"}\nOrigem: ${lead.source || "site"}`,
          }),
        });
      } catch (error) {
        console.error("[lead] email error", error);
      }
    }

    // 4. Retornar link do WhatsApp com mensagem pré-preenchida
    // PLACEHOLDER: substituir VITE_WHATSAPP_NUMBER pelo número real de produção.
    // Fallback temporário usa o número do Lucas Philipe até o número oficial ser configurado.
    const whatsappNumber = getEnv("VITE_WHATSAPP_NUMBER") ?? "5562992856373";
    const whatsappMessage = formatWhatsappMessage(lead);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return {
      success: true,
      whatsappUrl,
    };
  });
