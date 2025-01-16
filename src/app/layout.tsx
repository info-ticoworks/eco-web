import type { ChildrenInterface } from '@/interfaces/general';
import AppProvider from '@/contexts/AppContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/lib/fontawesome';
import './globals.css';
import OfertaLaboral from '@/components/modals/OfertaLaboral';

import { SITE_URL } from '@/constants/general';

config.autoAddCss = false;

export const metadata = {
  title: 'Ecokhemia',
  description: 'Somos una empresa de limpieza industrial que utiliza diversas tecnologías para ofrecer soluciones eficientes, seguras y responsables con el medio ambiente.',
  openGraph: {
    title: 'Ecokhemia',
    description: 'Somos una empresa de limpieza industrial que utiliza diversas tecnologías para ofrecer soluciones eficientes, seguras y responsables con el medio ambiente.',
    url: SITE_URL,
    siteName: 'Ecokhemia - Servicios de limpieza industrial',
    images: [
      {
        url: `${SITE_URL}/metadata.png`,
        width: 800,
        height: 600,
        alt: 'Ecokhemia - Servicios de limpieza industrial',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecokhemia',
    title: 'Ecokhemia - Servicios de limpieza industrial',
    description: 'Somos una empresa de limpieza industrial que utiliza diversas tecnologías para ofrecer soluciones eficientes, seguras y responsables con el medio ambiente.',
    images: [`${SITE_URL}/metadata.png`],
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({ children }: ChildrenInterface) {
  return (
    <html lang='es'>
      <AppProvider>
        <body className="flex flex-col justify-between min-h-screen font-sans antialiased bg-[#fdfdfd]">
          <Navbar />
          {children}
          <OfertaLaboral />
          <Footer />
        </body>
      </AppProvider>
    </html>
  );
}
