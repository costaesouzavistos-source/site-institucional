import { motion } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
// PLACEHOLDER: imagem final substituirá esta versão gerada por IA.
import bg from "@/assets/final-cta.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(30)
    .regex(/^[0-9()+\-\s]+$/, "Telefone inválido"),
  visa: z.string().min(1, "Selecione o tipo de visto"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function ContactCTA() {
  const [loading, setLoading] = useState(false);
  const { open: openWhatsAppModal } = useWhatsAppModal();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      visa: fd.get("visa"),
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os dados");
      return;
    }
    setLoading(true);
    try {
      const result = await submitLead({ data: parsed.data });
      toast.success("Solicitação enviada! Redirecionando para o WhatsApp…");
      window.open(result.whatsappUrl, "_blank");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Erro ao enviar. Tente novamente.";
      toast.error(message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-navy-deep py-24 text-cream lg:py-32"
    >
      {/* PLACEHOLDER background */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Família contemplando fogos sobre parque temático nos EUA"
          width={1920}
          height={1080}
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/85 to-navy-deep" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Comece agora</div>
          <h2 className="font-serif text-4xl leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
            Comece hoje a jornada até a{" "}
            <span className="italic text-gold-soft">viagem dos sonhos</span> da sua família.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/80">
            Preencha o formulário ou fale direto pelo WhatsApp. Em minutos você conversa com uma
            especialista real.
          </p>

          <button
            onClick={openWhatsAppModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-soft"
          >
            <MessageCircle className="h-4 w-4" />
            Falar agora no WhatsApp
          </button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70">
                Nome completo
              </label>
              <input
                name="name"
                required
                maxLength={100}
                className="w-full rounded-lg border border-cream/15 bg-navy-deep/40 px-4 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-gold"
                placeholder="Como podemos te chamar?"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70">
                Telefone / WhatsApp
              </label>
              <input
                name="phone"
                required
                maxLength={30}
                className="w-full rounded-lg border border-cream/15 bg-navy-deep/40 px-4 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-gold"
                placeholder="(62) 9 9999-9999"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70">
                Tipo de visto
              </label>
              <select
                name="visa"
                required
                defaultValue=""
                className="w-full rounded-lg border border-cream/15 bg-navy-deep/40 px-4 py-3 text-cream outline-none focus:border-gold"
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="B1/B2 Turismo">B1/B2 · Turismo/Família</option>
                <option value="F1 Estudante">F1 · Estudante</option>
                <option value="J1 Intercâmbio">J1 · Intercâmbio</option>
                <option value="Negócios">Negócios</option>
                <option value="Renovação">Renovação</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70">
                Mensagem (opcional)
              </label>
              <textarea
                name="message"
                rows={3}
                maxLength={1000}
                className="w-full resize-none rounded-lg border border-cream/15 bg-navy-deep/40 px-4 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-gold"
                placeholder="Conte um pouco sobre o seu sonho de viagem…"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-soft disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            Enviar solicitação
          </button>
          <p className="mt-3 text-center text-[11px] text-cream/50">
            Ao enviar, você concorda em ser contatado pela nossa equipe.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
