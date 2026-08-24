import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { z } from "zod";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
// PLACEHOLDER: imagem final substituirá esta versão gerada por IA.
import bg from "@/assets/final-cta.jpg";

function StampMark() {
  return (
    <motion.svg
      viewBox="0 0 96 96"
      className="h-5 w-5 shrink-0 text-navy-deep"
      initial={{ scale: 1.5, rotate: -18, opacity: 0 }}
      animate={{ scale: 1, rotate: -6, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
    >
      <circle cx="48" cy="48" r="42" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="48" cy="48" r="34" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {[-90, -45, 0, 45, 90, 135, 180, 225].map((deg) => {
        const r = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={48 + 42 * Math.cos(r)}
            cy={48 + 42 * Math.sin(r)}
            r="2.5"
            fill="currentColor"
          />
        );
      })}
      <path
        d="M32 49L43 60L66 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

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

type FieldName = "name" | "phone" | "visa" | "message";

export function ContactCTA() {
  const [loading, setLoading] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
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
      const errors: Partial<Record<FieldName, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as FieldName | undefined;
        if (field && !errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      const count = Object.keys(errors).length;
      toast.error(
        count > 1
          ? `Verifique ${count} campos destacados abaixo.`
          : (parsed.error.issues[0]?.message ?? "Verifique os dados"),
      );
      return;
    }
    setFieldErrors({});
    setLoading(true);
    try {
      const result = await submitLead({ data: parsed.data });
      toast.success("Solicitação enviada! Redirecionando para o WhatsApp…");
      window.open(result.whatsappUrl, "_blank");
      (e.target as HTMLFormElement).reset();
      setJustSubmitted(true);
      setTimeout(() => setJustSubmitted(false), 2600);
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
          <h2 className="font-serif text-4xl leading-tight text-cream text-balance sm:text-5xl">
            Comece hoje a jornada até a{" "}
            <span className="italic text-gold-soft">viagem dos sonhos</span> da sua família.
          </h2>
          <p className="mt-6 max-w-lg text-lg text-cream/80">
            Preencha o formulário ou fale direto pelo WhatsApp. Em minutos você conversa com uma
            especialista real.
          </p>

          <button
            onClick={openWhatsAppModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-all hover:scale-[1.03] hover:bg-gold-soft active:scale-[0.98]"
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
              <label
                htmlFor="contact-name"
                className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70"
              >
                Nome completo
              </label>
              <input
                id="contact-name"
                name="name"
                required
                maxLength={100}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                className={`w-full rounded-lg border bg-navy-deep/40 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${fieldErrors.name ? "border-red-400" : "border-cream/15"}`}
                placeholder="Como podemos te chamar?"
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {fieldErrors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-phone"
                className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70"
              >
                Telefone / WhatsApp
              </label>
              <input
                id="contact-phone"
                name="phone"
                required
                maxLength={30}
                aria-invalid={!!fieldErrors.phone}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                className={`w-full rounded-lg border bg-navy-deep/40 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${fieldErrors.phone ? "border-red-400" : "border-cream/15"}`}
                placeholder="(62) 9 9999-9999"
              />
              {fieldErrors.phone && (
                <p id="phone-error" className="mt-1.5 text-xs text-red-400">
                  {fieldErrors.phone}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-visa"
                className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70"
              >
                Tipo de visto
              </label>
              <select
                id="contact-visa"
                name="visa"
                required
                defaultValue=""
                aria-invalid={!!fieldErrors.visa}
                aria-describedby={fieldErrors.visa ? "visa-error" : undefined}
                className={`w-full rounded-lg border bg-navy-deep/40 px-4 py-3 text-cream outline-none transition-colors focus:border-gold ${fieldErrors.visa ? "border-red-400" : "border-cream/15"}`}
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
              {fieldErrors.visa && (
                <p id="visa-error" className="mt-1.5 text-xs text-red-400">
                  {fieldErrors.visa}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cream/70"
              >
                Mensagem (opcional)
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                maxLength={1000}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                className={`w-full resize-none rounded-lg border bg-navy-deep/40 px-4 py-3 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold ${fieldErrors.message ? "border-red-400" : "border-cream/15"}`}
                placeholder="Conte um pouco sobre o seu sonho de viagem…"
              />
              {fieldErrors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {fieldErrors.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || justSubmitted}
            aria-busy={loading}
            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.98] disabled:hover:scale-100 ${
              justSubmitted
                ? "bg-cream text-navy-deep"
                : "bg-gold text-navy-deep hover:bg-gold-soft disabled:opacity-70"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {justSubmitted ? (
                <motion.span
                  key="submitted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  <StampMark />
                  Recebido
                </motion.span>
              ) : loading ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando…
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="inline-flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Enviar solicitação
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <p className="mt-3 text-center text-xs text-cream/50">
            Ao enviar, você concorda em ser contatado pela nossa equipe.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
