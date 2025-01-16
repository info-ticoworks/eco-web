import anime from 'animejs/lib/anime.es.js';

export default function useOfertaLaboral() {
  const openModal = () => {
    const modal = document.getElementById('ol') as HTMLElement;
    const timeline = anime.timeline({ loop: false });

    timeline.add({
      targets: '#ol',
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 200,
      begin: () => {
        modal.style.display = 'flex';
      }
    });
    timeline.add({
      targets: '#ol-content',
      translateY: 0,
      easing: 'easeInOutQuad',
      duration: 500,
      delay: 200
    });
  };
  const closeModal = () => {
    const modal = document.getElementById('ol') as HTMLElement;

    const timeline = anime.timeline({ loop: false });
    timeline.add({
      targets: '#ol-content',
      translateY: 1000,
      easing: 'easeInOutQuad',
      duration: 500,

    });
    timeline.add({
      targets: '#ol',
      opacity: [1, 0],
      easing: 'easeInOutQuad',
      duration: 200,
      delay: 200,
      complete: () => {
        modal.style.display = 'none';
      }
    });

  };

  return {
    openModal,
    closeModal
  };
}