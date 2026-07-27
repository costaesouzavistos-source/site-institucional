import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const familyImages = [
  {
    src: "/images/optimized/64FE4FB0-4311-4292-8E18-1767978A65B1.jpg",
    thumb: "/images/optimized/64FE4FB0-4311-4292-8E18-1767978A65B1-thumb.jpg",
    alt: "Família reunida com passaportes aprovados",
  },
  {
    src: "/images/optimized/23CA20A3-575F-4F86-8346-AA7FEFE09801.jpg",
    thumb: "/images/optimized/23CA20A3-575F-4F86-8346-AA7FEFE09801-thumb.jpg",
    alt: "Família em Orlando aproveitando a viagem",
  },
  {
    src: "/images/optimized/7769300C-2E82-40A4-B621-CD30F59C506C.jpg",
    thumb: "/images/optimized/7769300C-2E82-40A4-B621-CD30F59C506C-thumb.jpg",
    alt: "Família brasileira com personagem no parque",
  },
  {
    src: "/images/optimized/CC65FEE0-72FB-4710-BDAE-F9BF23467CB9.jpg",
    thumb: "/images/optimized/CC65FEE0-72FB-4710-BDAE-F9BF23467CB9-thumb.jpg",
    alt: "Família brasileira celebrando a aprovação do visto",
  },
];

export function FamilyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
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
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            — Famílias realizadas
          </span>
          <h2 className="font-serif text-3xl text-navy-deep sm:text-4xl lg:text-5xl">
            O sonho americano <span className="italic text-gold">em fotos reais.</span>
          </h2>
          <p className="mt-4 text-navy-deep/70">
            Histórias de quem confiou no nosso trabalho e hoje colhe lembranças ao lado de quem ama.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {familyImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] pl-3 sm:basis-[70%] md:basis-[50%] lg:basis-[35%]"
                >
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy-deep/5">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep text-cream shadow-lg transition-all hover:bg-gold hover:text-navy-deep lg:-left-6"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep text-cream shadow-lg transition-all hover:bg-gold hover:text-navy-deep lg:-right-6"
            aria-label="Próxima foto"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {familyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-gold"
                  : "w-2 bg-navy-deep/20 hover:bg-navy-deep/40"
              }`}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
