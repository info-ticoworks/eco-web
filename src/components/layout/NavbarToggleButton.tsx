'use client';

import clsx from 'clsx';
import useNavbar from '@/hooks/useNavBar';

export default function NavbarToggleButton() {
  const { navbarStatus, setNavbarStatus } = useNavbar();

  return (
    <button
      className='flex flex-col gap-[7px] justify-self-end cursor-pointer group [&>div]:transition [&>div]:duration-700 [&>div]:ease-in-out order-2 lg:hidden'
      aria-label='Toggle navigation menu'
      onClick={() => setNavbarStatus(!navbarStatus)}
    >
      <div
        className={clsx(
          'w-7 h-[3px] bg-white rounded group-hover:lg:bg-white',
          navbarStatus
            ? 'rotate-[-135deg] translate-y-[8.5px]'
            : 'rotate-0 translate-y-0'
        )}
      />
      <div
        className={clsx(
          'w-7 h-[3px] bg-white rounded group-hover:lg:bg-white',
          navbarStatus ? 'opacity-0' : 'opacity-100'
        )}
      />
      <div
        className={clsx(
          'w-7 h-[3px] bg-white rounded group-hover:lg:bg-white',
          navbarStatus
            ? 'rotate-[135deg] -translate-y-[11.5px]'
            : 'rotate-0 translate-y-0'
        )}
      />
    </button>
  );
}