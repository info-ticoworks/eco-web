'use client';
import useOfertaLaboral from '@/hooks/useOfertaLaboral';
import anime from 'animejs';
import { useEffect } from 'react';

export default function OfertaLaboralButton() {
  const { openModal } = useOfertaLaboral();

  useEffect(() => {
    const targetButton = document.querySelector('#footer .button-outline-header') as HTMLElement;
    const timeline = anime.timeline({ loop: false });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timeline.add({
            targets: targetButton,
            opacity: [0, 1],
            scale: [0.5, 1],
            easing: 'easeInOutQuad',
            duration: 200,
          });

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    if (targetButton !== null) {
      observer.observe(targetButton);
    }

  }, []);

  return (
    <button
      className='opacity-0 button-outline button-outline-header'
      onClick={() => openModal()}
    >
      Oferta laboral
    </button>
  );
}