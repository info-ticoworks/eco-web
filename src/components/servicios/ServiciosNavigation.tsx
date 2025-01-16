'use client';

import Link from 'next/link';
import DynamicSvg from '@/components/svg/DynamicSvg';
import { Service } from '@/interfaces/services';

export default function ServiciosNavigation({ services, slug }: { services: Service[]; slug: string; }) {
  return (
    <header className='container px-4 pt-[88px] pb-8'>
      <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {
          services.map(service => (
            <div className='' key={service.slug}>
              <Link
                href={`/servicios/${service.slug}`}
                className={`w-full flex gap-1.5 sm:gap-2 justify-normal items-center services-link ${slug === service.slug ? 'services-link--active' : ''}`}
              >
                <DynamicSvg className='h-8 transition-all min-w-8 services-link-svg' svgName={service.slug} />

                <h5 className='w-full text-xs font-bold leading-4 text-left transition-colors text-eco-sky-blue h-fit'>
                  {service.name}
                </h5>
              </Link>
            </div>
          ))
        }
      </div>
    </header>
  );
}