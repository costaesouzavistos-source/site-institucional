export interface Specialist {
  slug: string;
  name: string;
  role: string;
  phone: string;
  photo: string;
}

export const SPECIALISTS: Specialist[] = [
  {
    slug: "lucas",
    name: "Lucas Philipe",
    role: "Especialista em Visto Americano de Turismo, Negócios, Estudante e Reversão de Negativa",
    phone: "5562992856373",
    photo: "/images/optimized/foto-lucas.jpeg",
  },
  {
    slug: "jacqueline",
    name: "Jacqueline Costa",
    role: "Especialista em Turismo para Europa e Visto Americano de Turismo, Negócios, Estudante e Reversão de Negativa",
    phone: "5562992927288",
    photo: "/images/optimized/IMG_5787-avatar.jpg",
  },
];

export function buildWhatsAppUrl(phone: string) {
  return `https://wa.me/${phone}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20em%20vistos%20americanos.`;
}
