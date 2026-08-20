import { motion } from "motion/react";
import { MessageCircle, Award, GraduationCap, Briefcase } from "lucide-react";
import { useWhatsAppModal } from "@/contexts/WhatsAppModalContext";

const specialists = [
  {
    name: "Lucas Philipe",
    role: "Especialista em Vistos Americanos",
    photo: "/images/optimized/foto-lucas.jpeg",
    imageZoom: "scale-[1.4]",
    imagePosition: "object-center",
    // PLACEHOLDER: ajustar formação conforme dados reais.
    experience: "+10 anos",
    education: "Formação em Direito e Relações Internacionais",
    bio: "Especialista em visto americano e em reversão de visto negado. Criador do método único que mais aprova no País. Atuação em vistos B1/B2 Turismo/Negócios e F1 Estudante, desde o diagnóstico inicial à aprovação. Focado em estratégia, preparação para entrevista e grande experiência em defesa processual para quem teve o visto negado.",
  },
  {
    name: "Jacqueline Costa",
    role: "Especialista em Vistos Americanos",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
    imageZoom: "scale-100",
    imagePosition: "object-center",
    // PLACEHOLDER: ajustar anos de experiência e formação conforme dados reais.
    experience: "+10 anos de experiência em vistos americanos e 18 anos de turismo.",
    education: "Formação em Administração e Marketing.",
    bio: "Especialista em Visto Americano e Reversão de visto negado. Atuação em vistos B1/B2 Turismo/Negócios, F1 Estudante, desde do diagnóstico à aprovação. Focada em preparação para entrevista e ampla experiência em vendas de viagens para Europa e Estados Unidos.",
  },
];

export function AboutTeam() {
  const { open: openWhatsAppModal } = useWhatsAppModal();

  return (
    <section id="sobre" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">— Quem somos</div>
          <h2 className="font-serif text-3xl leading-tight text-navy-deep text-balance sm:text-4xl lg:text-5xl">
            Os especialistas por trás da <span className="italic">Costa & Souza</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Uma equipe pequena, focada e com experiência real em vistos americanos. Cada caso é
            analisado por quem entende do assunto.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {specialists.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-gold/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[200px_1fr]">
                <div className="relative h-64 overflow-hidden sm:h-full sm:min-h-[280px]">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${person.imageZoom || ""} ${person.imagePosition || "object-center"}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent sm:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">
                    {person.role}
                  </div>
                  <h3 className="font-serif text-2xl text-navy-deep">{person.name}</h3>

                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 shrink-0 text-gold" />
                      <span>{person.experience} de experiência em vistos americanos</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>{person.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span>+16.300 vistos acompanhados e aprovados</span>
                    </div>
                  </div>

                  <p className="mt-5 leading-relaxed text-navy-deep/80">{person.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button
            onClick={openWhatsAppModal}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-lg shadow-gold/20 transition-all hover:scale-[1.03] hover:bg-gold-soft hover:shadow-gold/30 active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com um especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
}
