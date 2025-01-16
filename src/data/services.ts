import { Service } from '@/interfaces/services';

export const ECOKHEMIA_SERVICES: Service[] = [
  {
    slug: 'limpiezas-profundas',
    icon: '/svg/limpiezas-profundas.svg',
    cover: '/images/services/limpiezas-profundas.webp',
    name: 'Limpiezas profundas',
    description: `<p>Aseguramos calidad, seguridad y eficiencia en higiene de máxima exigencia.</p>

      <p>Ofrecemos personal fijo en operaciones de plantas de alimentos, tanto en áreas externas o productivas. Brindando servicio de lunes a domingo, con horario flexible, garantizamos un conjunto de procesos profesionales de higiene especialmente pensados para áreas de producción, almacenamiento y distribución de las industrias.</p>`
  },
  {
    slug: 'limpieza-en-alturas',
    icon: '/svg/limpieza-en-alturas.svg',
    cover: '/images/services/limpieza-en-alturas.webp',
    name: 'Limpieza en alturas',
    description: `<p>Un servicio especializado en trabajos en altura de fachadas, techos internos y exteriores, entre otros.</p>
    <p>Contamos con un equipo profesional, con las herramientas necesarias para llevar a cabo el trabajo de manera segura y eficiente.
    Con la seguridad como prioridad, identificamos los posibles riesgos y establecemos un plan de trabajo detallado, con sistemas de seguridad para garantizar la integridad de los trabajadores y al mismo tiempo ofrecer una limpieza completa y eficiente.</p>`
  },
  {
    slug: 'limpieza-espacios-confinados',
    icon: '/svg/limpieza-espacios-confinados.svg',
    cover: '/images/services/limpieza-espacios-confinados.webp',
    name: 'Limpieza espacios confinados',
    description: `<p>Precisión profesional en tanques, silos, ductos, chimeneas y extractores, entre otros.</p>
    <p>Contamos con personal especializado para realizar tareas específicas, como el raspado de muros y pisos o quitar residuos sólidos que se acumulan en el fondo de las fosas, tanques, silos y chimeneas. La limpieza de espacios confinados debe realizarse por un personal altamente capacitado y calificado, que sepa cómo resolver emergencias y cómo utilizar los equipos adecuados.</p>`
  },
  {
    slug: 'limpieza-por-unidad',
    icon: '/svg/limpieza-por-unidad.svg',
    cover: '/images/services/limpieza-por-unidad.webp',
    name: 'Limpieza por unidad',
    description: `<p>Un servicio personalizado y específico para la necesidad de cada industria.</p>
    <p>Ofrecemos personal fijo en operaciones de plantas de alimentos, con horarios flexibles, para la higiene de fachadas, techos internos, techos exteriores, vigas y racks. La correcta limpieza es uno de los aspectos más importantes para cualquier tipo de industria y la ejecutamos en profundidad removiendo polvo, manchas y detritos visibles para evitar la propagación de los microorganismos.</p>`
  },
  {
    slug: 'limpieza-con-vapor',
    icon: '/svg/limpieza-con-vapor.svg',
    cover: '/images/services/limpieza-con-vapor.webp',
    name: 'Limpieza con vapor',
    description: `<p>Una técnica especial para lugares de difícil acceso, sin la necesidad de acción mecánica.</p>
    <p>Contamos con este eficaz método de limpieza y desinfección utilizado para eliminar suciedad sin la necesidad de acción mecánica. El vapor limpia sin esfuerzo y ahorra tiempo, por lo que la higiene es más rápida, sencilla, biológicamente limpia y respetuosa con el medio ambiente: la limpieza con vapor es la forma más natural de limpiar.</p>`
  },
  {
    slug: 'desinfeccion-y-micronebulizacion',
    icon: '/svg/desinfeccion-y-micronebulizacion.svg',
    cover: '/images/services/desinfeccion-y-micronebulizacion.webp',
    name: 'Desinfección y micronebulización',
    description: `<p>Desinfección con luz ultravioleta y ozono, de alta efectividad para superficies alimenticias.</p>
    <p>La micronebulización es una técnica que se utiliza para desinfectar el aire y las superficies en diferentes tipos de espacios. Se logra mediante la aplicación de una solución química que se transforma en pequeñas gotas de agua con princiopios bioactivos, las cuales se dispersan en el aire y se depositan en las superficies de la estancia. <br>
    Cuenta con ventajas destacables, como su mayor poder de penetración, su cobertura superior para grandes espacios y su eficacia para prevenir la acción de enfermedades.</p>`
  },
];

// ? test
export const ECOKHEMIA_SERVICES_CAROUSEL: string[] = [
  '/images/services/limpiezas-profundas.webp',
  '/images/services/limpieza-en-alturas.webp',
  '/images/services/limpieza-espacios-confinados.webp',
  '/images/services/limpieza-por-unidad.webp',
  '/images/services/limpieza-con-vapor.webp',
  '/images/services/desinfeccion-y-micronebulizacion.webp',
];