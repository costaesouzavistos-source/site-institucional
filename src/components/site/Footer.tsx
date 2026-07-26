import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-navy-deep text-cream/80">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">
        <div>
          <img
            src="/logo-definitiva-transparente.png"
            alt="Costa & Souza Especialistas em Vistos Americanos"
            className="h-20 w-auto object-contain md:h-24"
            width="1688"
            height="911"
          />
          <p className="mt-3 text-sm leading-relaxed">
            Consultoria especializada em vistos americanos. Referência nacional, sede em Anápolis —
            Goiás, atendimento remoto em todo o Brasil.
          </p>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Contato</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>+55 (62) 99285-6373</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>contato@costaesouza.com.br</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Anápolis · Goiás — Brasil</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Navegação</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#servicos" className="hover:text-gold">
                Serviços
              </a>
            </li>
            <li>
              <a href="#processo" className="hover:text-gold">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#pacotes" className="hover:text-gold">
                Pacotes
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold">
                Perguntas frequentes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Guias sobre o visto</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/assessoria-visto-americano" className="hover:text-gold">
                Assessoria completa
              </a>
            </li>
            <li>
              <a href="/como-tirar-visto-americano" className="hover:text-gold">
                Como tirar o visto
              </a>
            </li>
            <li>
              <a href="/quanto-custa-visto-americano" className="hover:text-gold">
                Quanto custa o visto
              </a>
            </li>
            <li>
              <a href="/documentos-visto-americano" className="hover:text-gold">
                Documentos necessários
              </a>
            </li>
            <li>
              <a href="/ds-160" className="hover:text-gold">
                O que é o DS-160
              </a>
            </li>
            <li>
              <a href="/renovar-visto-americano" className="hover:text-gold">
                Renovar o visto
              </a>
            </li>
            <li>
              <a href="/visto-americano-negado" className="hover:text-gold">
                Visto negado: o que fazer
              </a>
            </li>
            <li>
              <a href="/visto-negado-214b" className="hover:text-gold">
                Entenda o 214(b)
              </a>
            </li>
            <li>
              <a href="/visto-americano-familia" className="hover:text-gold">
                Visto para família
              </a>
            </li>
            <li>
              <a href="/visto-americano-criancas" className="hover:text-gold">
                Visto para crianças
              </a>
            </li>
            <li>
              <a href="/visto-americano-anapolis" className="hover:text-gold">
                Atendimento em Anápolis
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">Siga</div>
          <div className="flex gap-3">
            <a
              href="#" // PLACEHOLDER: adicionar URL real do Instagram
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#" // PLACEHOLDER: adicionar URL real do Facebook
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-[1440px] px-6 py-6 text-xs text-cream/50 lg:px-10">
          <p>© {new Date().getFullYear()} Costa & Souza. Todos os direitos reservados.</p>
          <p className="mt-2 max-w-3xl leading-relaxed">
            Aviso legal: a Costa & Souza é uma consultoria privada e não possui qualquer vínculo com
            o Consulado, a Embaixada dos Estados Unidos ou o governo americano. A aprovação do visto
            é decisão exclusiva do consulado. Os números de aprovações, taxas e experiência são
            baseados em dados internos da empresa.
          </p>
        </div>
      </div>
    </footer>
  );
}
