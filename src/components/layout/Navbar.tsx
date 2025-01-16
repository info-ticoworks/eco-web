'use client';

import NavbarToggleButton from './NavbarToggleButton';
import NavbarMenu from './NavbarMenu';
import Link from 'next/link';
import useNavbar from '@/hooks/useNavBar';

import './navbar.css';
import DynamicSvg from '../svg/DynamicSvg';

const Navbar = () => {
  const { hideNavbar } = useNavbar();

  return (
    <nav
      className="fixed top-0 left-0 z-40 w-full text-white transition-transform bg-transparent lg:bg-eco-blue--dark h-fit navbar-shadow--desktop"
      id='navbar'
      style={{ transform: hideNavbar ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="flex flex-col w-full mx-auto transition-all lg:px-4 lg:flex-row lg:items-center lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1320px] 3xl:max-w-[1512px]">
        <div className="z-50 bg-eco-blue--dark navbar-shadow lg:z-auto h-[68px]">
          <div className="flex items-center justify-between px-4 py-2 lg:px-0 h-fit lg:h-full">
            <Link href='/' className='cursor-pointer'>
              <DynamicSvg
                svgName='logo-full'
                className='w-[240px] my-auto'
              />
            </Link>

            <NavbarToggleButton />
          </div>
        </div>

        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;