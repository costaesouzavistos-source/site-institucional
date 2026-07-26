import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openWhatsAppModal } = useWhatsAppModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md border-gold/20 shadow-lg shadow-navy-deep/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center -ml-2 md:-ml-4">
          <img
            src="/logo-site-transparente.png"
            alt="Costa & Souza"
            className="h-14 w-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,1)] md:h-14"
            width="1544"
            height="243"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-cream/85 hover:text-gold" : "text-cream/85 hover:text-gold"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={openWhatsAppModal}
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all hover:scale-[1.02] hover:bg-gold-soft hover:shadow-gold/30 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Fale com um Especialista
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden text-cream`}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-navy-deep lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-cream/90 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                openWhatsAppModal();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep"
            >
              <MessageCircle className="h-4 w-4" />
              Fale com um Especialista
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
