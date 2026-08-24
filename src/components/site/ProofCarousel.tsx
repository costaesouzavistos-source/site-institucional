import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Slide =
  | { kind: "photo"; src: string; alt: string }
  | {
      kind: "quote";
      quote: string;
      name: string;
      city: string;
      visa: string;
    };

const slides: Slide[] = [
  {
    kind: "photo",
    src: "/images/optimized/64FE4FB0-4311-4292-8E18-1767978A65B1.jpg",
    alt: "Família reunida com passaportes aprovados",
  },
  {
    kind: "quote",
    quote:
      "A ansiedade era enorme, mas a Costa & Souza transformou o processo em algo tranquilo. Voltamos dos EUA com os filhos dizendo que foi a melhor viagem da vida.",
    name: "Família Ribeiro",
    city: "Goiânia — GO",
    visa: "B1/B2 · Turismo em família",
  },
  {
    kind: "photo",
    src: "/images/optimized/23CA20A3-575F-4F86-8346-AA7FEFE09801.jpg",
    alt: "Família em Orlando aproveitando a viagem",
  },
  {
    kind: "quote",
    quote:
      "Simulei a entrevista com a consultora mais de 5 vezes. No dia, entrei confiante e saí com o visto aprovado em minutos.",
    name: "Camila Andrade",
    city: "Brasília — DF",
    visa: "F1 · Estudante",
  },
  {
    kind: "photo",
    src: "/images/optimized/7769300C-2E82-40A4-B621-CD30F59C506C.jpg",
    alt: "Família brasileira com personagem no parque",
  },
  {
    kind: "quote",
    quote:
      "Renovei o meu, do meu marido e das duas crianças pelo dropbox. Impecável do início ao fim. Recomendo de olhos fechados.",
    name: "Família Nogueira",
    city: "Anápolis — GO",
    visa: "Renovação",
  },
  {
    kind: "photo",
    src: "/images/optimized/D5F1CDA9-E954-4A87-89E1-7853DA4C277A.jpg",
    alt: "Família brasileira celebrando a aprovação do visto",
  },
  {
    kind: "quote",
    quote:
      "Já tinha sido negado antes. Refizeram minha estratégia do zero e conseguimos a aprovação. Gratidão eterna.",
    name: "Rafael Menezes",
    city: "Uberlândia — MG",
    visa: "B1/B2 · Negócios",
  },
];

export function ProofCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_42%]"
              >
                {slide.kind === "photo" ? (
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy-deep/5">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading="lazy"
                      width={1200}
                      height={2133}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                    <Quote className="h-8 w-8 text-gold" />
                    <p className="mt-4 font-serif text-xl leading-relaxed text-navy-deep">
                      “{slide.quote}”
                    </p>
                    <div className="mt-8 border-t border-border pt-5">
                      <div className="font-semibold text-navy-deep">{slide.name}</div>
                      <div className="text-sm text-muted-foreground">{slide.city}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                        {slide.visa}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute -left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep text-cream shadow-lg transition-all hover:scale-110 hover:bg-gold hover:text-navy-deep active:scale-95 lg:-left-6"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep text-cream shadow-lg transition-all hover:scale-110 hover:bg-gold hover:text-navy-deep active:scale-95 lg:-right-6"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "w-6 bg-gold"
                : "w-2 bg-navy-deep/20 hover:bg-navy-deep/40"
            }`}
            aria-label={`Ir para item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
