import { Client, Guarantee, Innovation, Responsibility } from '@/interfaces/home';

export const HEADER_IMAGES: string[] = [
  '/images/header/home-1.webp',
  '/images/header/home-2.webp',
  '/images/header/home-3.webp',
];

export const GUARANTEES: Guarantee[] = [
  {
    slug: 'responsabilidad',
    icon: '/svg/responsabilidad.svg',
    name: 'Responsabilidad',
  },
  {
    slug: 'compromiso',
    icon: '/svg/compromiso.svg',
    name: 'Compromiso',
  },
  {
    slug: 'lealtad',
    icon: '/svg/lealtad.svg',
    name: 'Lealtad',
  },
  {
    slug: 'innovacion',
    icon: '/svg/innovacion.svg',
    name: 'Innovación',
  },
  {
    slug: 'eficiencia-y-eficacia',
    icon: '/svg/eficiencia-y-eficacia.svg',
    name: 'Eficiencia y eficacia',
  }
];

export const CLIENTS: Client[] = [
  {
    image: '/images/brands/logo-kerry.webp',
    width: 165,
    height: 82,
  },
  {
    image: '/images/brands/logo-walmart.webp',
    width: 201,
    height: 57,
  },
  {
    image: '/images/brands/logo-cargill.webp',
    width: 166,
    height: 75,
  },
  {
    image: '/images/brands/logo-grupo-vigo.webp',
    width: 197,
    height: 66,
  },
  {
    image: '/images/brands/logo-griffith.webp',
    width: 190,
    height: 75,
  },
  {
    image: '/images/brands/logo-cmi.webp',
    width: 189,
    height: 66,
  },
  {
    image: '/images/brands/logo-del-monte.webp',
    width: 150,
    height: 111,
  },
  {
    image: '/images/brands/logo-nueces-ind.webp',
    width: 180,
    height: 95,
  },
  {
    image: '/images/brands/logo-kerry.webp',
    width: 165,
    height: 82,
  },
  {
    image: '/images/brands/logo-walmart.webp',
    width: 201,
    height: 57,
  },
  {
    image: '/images/brands/logo-cargill.webp',
    width: 166,
    height: 75,
  },
  {
    image: '/images/brands/logo-grupo-vigo.webp',
    width: 197,
    height: 66,
  },
  {
    image: '/images/brands/logo-griffith.webp',
    width: 190,
    height: 75,
  },
  {
    image: '/images/brands/logo-cmi.webp',
    width: 189,
    height: 66,
  },
  {
    image: '/images/brands/logo-del-monte.webp',
    width: 150,
    height: 111,
  },
  {
    image: '/images/brands/logo-nueces-ind.webp',
    width: 180,
    height: 95,
  },
];

export const INNOVATIONS: Innovation[] = [
  {
    slug: 'innovacion-mejora',
    icon: '/svg/innovacion-mejora.svg',
    name: 'Innovación y mejora continua',
    text: `Implementamos soluciones tecnológicas y automatizaciones para optimizar la productividad y eficiencia, reduciendo costos y riesgos.`
  },
  {
    slug: 'innovacion-validacion',
    icon: '/svg/innovacion-validacion.svg',
    name: 'Controles de calidad y calificados',
    text: `Estamos comprometidos con la sostenibilidad, buscando continuamente formas de reducir nuestro impacto ambiental, desde el uso eficiente de recursos hasta la gestión responsable de residuos.`
  },
  {
    slug: 'innovacion-ma',
    icon: '/svg/innovacion-ma.svg',
    name: 'Mínimo impacto ambiental',
    text: `Usamos tecnologías innovadoras y productos biodegradables para minimizar el impacto ambiental, maximizando resultados.`
  },
];

export const RESPONSIBILITIES: Responsibility[] = [
  {
    title: 'Responsabilidad Empresarial',
    text: `<p>Con un legado consolidado y un compromiso inquebrantable hacia la responsabilidad empresarial, nos hemos convertido en un referente en nuestro sector. Como empresa certificada por el MTS, C.C.S.S. e INS de Costa Rica, garantizamos la protección legal de nuestro personal. Además, cumplimos con normas como FSSC 22000:2005, asegurando excelencia en cada paso de nuestro servicio. Nuestro compromiso con la innovación y nuestros valores en honestidad y especialización respaldan nuestra reputación como líderes visionarios en la industria, reconocidos por nuestros clientes por nuestra calidad y atención incomparables.</p>`,
    image: '/images/responsibility/responsabilidad-empresarial.webp',
    logos: [
      '/images/responsibility/logo-ins.webp',
      '/images/responsibility/logo-ccss.webp',
    ],
  },
  {
    title: 'Responsabilidad Medioambiental',
    text: `<p class="mb-4">Nuestra empresa cuenta con el galardón Bandera Azul Ecológica del Comité Técnico del Programa , obteniendo 1 estrella en la Categoría XVII: Movilidad Sostenible en el año 2022.</p>

    <p>Esto ratifica nuestro camino como un emprendimiento con conciencia ambiental, aplicando cada uno de nuestros procesos con máxima responsabilidad y proyección, pensando en que nuestro concepto de limpieza también contempla el futuro de todos.</p>`,
    image: '/images/responsibility/responsabilidad-medioambiental.webp',
    logos: [
      '/images/responsibility/logo-bandera-azul-ecologica.webp',
    ],
  }
];