import { MessageCircle } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

export function WhatsAppFloat() {
  const { open } = useWhatsAppModal();

  return (
    <button
      onClick={open}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gold text-navy-deep shadow-[0_10px_30px_-5px_var(--navy-deep)] transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
      <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  );
}
