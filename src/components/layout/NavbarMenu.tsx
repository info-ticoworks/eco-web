'use client';

import useNavbar from '@/hooks/useNavBar';
import { NavLinksInterface } from '@/interfaces/links';
import { NAV_LINKS } from '@/constants/links';
// import Link from 'next/link';
import { Link } from 'react-scroll';

export default function NavbarMenu() {
  const { navbarStatus, setNavbarStatus } = useNavbar();

  const navigateTo = (section: string) => {
    const currentPath: string = window.location.pathname;

    if (currentPath === '/') {
      
      setNavbarStatus(false);
    } else {
      window.location.replace(`/#${section}`);
    }
  };

  return (
    <div className={`${navbarStatus ? 'h-fit pt-8 pb-8 bg-eco-blue--dark ' : 'h-0  py-0 my-0'} px-8 lg:pr-0  w-11/12 max-w-[420px] flex flex-col lg:w-full lg:max-w-full ml-auto lg:ml-0 lg:h-fit lg:my-0 lg:py-0 lg:flex-row lg:justify-between transition-all max-h-screen overflow-y-auto`}>
      {
        NAV_LINKS.map((link: NavLinksInterface) => (
          <Link
            smooth
            key={link.slug}
            to={`${link.to}`}
            duration={500}
            className='px-0 py-4 text-right text-white transition-all cursor-pointer'
            onClick={() => navigateTo(link.to)}
          >
            <span className='relative py-2 text-base font-bold lg:text-sm xl:text-lg navbar-link'>{link.name}</span>
          </Link>
        ))
      }
    </div>
  );
}