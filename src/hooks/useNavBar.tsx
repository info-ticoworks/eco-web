import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/contexts/AppContext';

export default function useNavbar() {
  const context = useContext(AppContext);
  const [hideNavbar, setHideNavbar] = useState(false);

  if (context === undefined) {
    throw new Error('useNavbar hook must be used within a provider');
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let lastScrollTop = window.scrollY;

      window.addEventListener('scroll', () => {
        const currentScrollTop = window.scrollY;

        // Check if the current scroll position is greater than the last scroll position
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          context.setNavbarStatus(false);
          setHideNavbar(true);
          
          // 
        } else {
          // Scrolling up
          setHideNavbar(false);
          
          // 
        }

        // Update the last scroll position to the current position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
      });
    }
  }, []);

  return {
    navbarStatus: context.navbarStatus,
    setNavbarStatus: context.setNavbarStatus,
    hideNavbar
  };
}
