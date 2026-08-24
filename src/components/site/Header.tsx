import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "@tanstack/react-router";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const sectionLinks = [
  { anchor: "servicos", label: "Serviços", homeOnly: true },
  { anchor: "processo", label: "Processo", homeOnly: true },
  { anchor: "quem-somos", label: "Sobre", homeOnly: true },
  { anchor: "depoimentos", label: "Depoimentos", homeOnly: true },
  { anchor: "faq", label: "FAQ", homeOnly: false },
  { anchor: "contato", label: "Contato", homeOnly: false },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: openWhatsAppModal } = useWhatsAppModal();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const links = sectionLinks.map((l) => ({
    href: l.homeOnly && !isHome ? `/#${l.anchor}` : `#${l.anchor}`,
    label: l.label,
  }));

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
        <a href="#top" className="group flex items-center gap-3 -ml-1 md:-ml-2">
          <span className="flex items-center">
            <svg viewBox="0 0 8 56" className="h-11 w-auto shrink-0 md:h-12" aria-hidden="true">
              <defs>
                <linearGradient id="pole-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8A6A28" />
                  <stop offset="45%" stopColor="#F4D98B" />
                  <stop offset="100%" stopColor="#B8902E" />
                </linearGradient>
              </defs>
              <circle cx="4" cy="4" r="4" fill="url(#pole-gradient)" />
              <rect x="2.5" y="7" width="3" height="47" rx="1.5" fill="url(#pole-gradient)" />
            </svg>
            <span className="-ml-0.5 drop-shadow-[0_0_15px_rgba(255,255,255,0.35)] transition-[filter] duration-300 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
              <img
                src="/bandeira-topo-site-transparente.png"
                alt=""
                aria-hidden="true"
                width="467"
                height="287"
                className="h-9 w-auto origin-left animate-flag-wave md:h-10"
              />
            </span>
          </span>
          <span className="font-serif text-xl uppercase leading-none tracking-wide text-cream sm:text-2xl">
            Costa <span className="text-gold">&amp;</span> Souza
          </span>
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
            className="-m-2.5 rounded-full p-2.5 text-cream lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-gold/20 bg-navy-deep lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-cream/90 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  openWhatsAppModal();
                }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-all hover:scale-[1.02] hover:bg-gold-soft active:scale-[0.98]"
              >
                <MessageCircle className="h-4 w-4" />
                Fale com um Especialista
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
