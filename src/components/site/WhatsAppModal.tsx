import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";
import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";

const CONTACTS = [
  {
    name: "Lucas Philipe",
    role: "Especialista em Reversão de Visto Negado",
    phone: "5562992856373",
    photo: "/images/optimized/foto-lucas.jpeg",
  },
  {
    name: "Jacqueline Costa",
    role: "Especialista em Turismo e Entrevista Consular",
    phone: "5562992927288",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },
];

function buildWhatsAppUrl(phone: string) {
  return `https://wa.me/${phone}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20em%20vistos%20americanos.`;
}

export function WhatsAppModal() {
  const { isOpen, close } = useWhatsAppModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-lg rounded-2xl border-gold/20 bg-navy-deep p-0 text-cream sm:max-w-xl">
        <button
          onClick={close}
          className="absolute right-4 top-4 z-10 -m-2.5 rounded-full p-3 text-cream/70 transition-colors hover:text-cream"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <DialogHeader className="px-8 pt-8 text-center">
          <DialogTitle className="flex items-center justify-center gap-3 font-serif text-2xl text-cream sm:text-3xl">
            Falar com um Especialista
            <img
              src="/bandeira-topo-site-transparente.png"
              alt="Bandeira dos EUA"
              className="inline-block h-6 w-auto rounded-sm sm:h-7"
            />
          </DialogTitle>
          <DialogDescription className="text-base text-cream/70">
            Escolha um dos nossos especialistas para iniciar seu atendimento.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 px-8 pb-8">
          {CONTACTS.map((contact, i) => (
            <motion.a
              key={contact.phone}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              href={buildWhatsAppUrl(contact.phone)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="group flex items-center gap-5 rounded-xl border border-gold/20 bg-cream/5 p-5 transition-all hover:border-gold/50 hover:bg-cream/10"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold/30">
                <img
                  src={contact.photo}
                  alt={contact.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-serif text-lg text-cream group-hover:text-gold sm:text-xl">
                  {contact.name}
                </div>
                <div className="text-sm text-cream/70 sm:text-base">{contact.role}</div>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy-deep transition-transform group-hover:scale-110">
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </motion.a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
