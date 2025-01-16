'use client';

import Image from 'next/image';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
import OfertaLaboralButton from '@/components/modals/OfertaLaboralButton';
import { Link } from 'react-scroll';

export default function HomeHeaderContent() {
  useEffect(() => {
    // Select the element to animate
    const textToAnimate = document.querySelector('.header-animated-text-1') as HTMLElement;
    const textToAnimate2 = document.querySelector('.header-animated-text-2') as HTMLElement;

    // Replace each character with a span element for individual animation
    if (textToAnimate.textContent != null) {
      textToAnimate.innerHTML = textToAnimate.textContent
        .replace(/\S/g, "<span class='header-animated-letter'>$&</span>");
    }
    if (textToAnimate2.textContent != null) {
      textToAnimate2.innerHTML = textToAnimate2.textContent
        .replace(/\S/g, "<span class='header-animated-letter'>$&</span>");
    }

    const animationTimeline = anime.timeline({ loop: false });

    animationTimeline.add({
      targets: '#header-element-1',
      translateX: [-1999, 0],
      translateY: [10000, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 400,
      delay: 0
    });
    animationTimeline.add({
      targets: '#header-element-2',
      translateX: [-10000, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 400,
      delay: 100
    });
    // Add the first animation sequence for the letters

    animationTimeline.add({
      targets: '.header-animated-text-1',
      scale: [1, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 100,
      delay: 0
    });
    animationTimeline.add({
      targets: '.header-animated-text-2',
      scale: [1, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 100,
      delay: 0
    });
    animationTimeline.add({
      targets: '.header-animated-text-1 .header-animated-letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 300,
      delay: (el, i) => 70 * i
    });
    animationTimeline.add({
      targets: '.header-animated-text-2 .header-animated-letter',
      scale: [4, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 300,
      delay: (el, i) => 70 * i
    });
    animationTimeline.add({
      targets: '#header .button-solid-header',
      scale: [0, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 200,
      delay: 0
    });
    animationTimeline.add({
      targets: '#header .button-outline-header',
      scale: [0, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 200,
      delay: 0
    });
  }, []);


  return (
    <div className="box-border relative z-10 w-full px-0 scroll-mb-0">
      <Image
        className='object-cover sm:object-contain object-left-bottom absolute left-0 bottom-0 z-20 p-0 m-0 w-screen h-[412px] sm:h-[460px] md:h-[504px] xl:h-[562px] transition-all opacity-0'
        src='/images/header/header-element-1.webp'
        width={1066}
        height={708}
        id='header-element-1'
        alt='ecokhemia white-mask'
      />

      <Image
        className='object-cover object-center sm:object-contain sm:object-left-bottom absolute bottom-0 left-0 z-10 h-[412px] w-screen sm:h-[369px] md:h-[504px] xl:h-[504px]transition-all opacity-0'
        src='/images/header/header-element-2.webp'
        width={1200}
        height={635}
        id='header-element-2'
        alt='ecockhemia green-line'
      />

      <div className="container absolute top-0 bottom-0 left-0 right-0 z-30 flex flex-col items-center w-screen px-4 pt-24 pb-4 mx-auto mt-auto mb-2 h-fit sm:right-0 sm:items-start sm:pt-32 sm:mb-8 xl:justify-center xl:w-full xl:right-0 2xl:mt-auto 2xl:max-w-full 2xl:pl-12">
        <h1 className='text-3xl text-center sm:text-left font-bold leading-10 md:leading-[68px] xl:leading-[82px] text-eco-green w-full max-w-[330px] sm:max-w-full sm:text-4xl md:text-5xl xl:text-[64px] header-animated-text-1 opacity-0'>
          Líderes en limpieza
        </h1>
        <h1 className='text-3xl text-center sm:text-left font-bold leading-10 md:leading-[68px] xl:leading-[82px] text-eco-green w-full max-w-[330px] sm:max-w-full sm:text-4xl md:text-5xl xl:text-[64px] header-animated-text-2 opacity-0'>
          industrial ecológica
        </h1>

        <div className="flex flex-col items-center gap-4 py-8 max-w-[330px] sm:max-w-full sm:flex-row xl:w-[846px] xl:px-8 xl:gap-12">
          <Link
            to='contacto'
            className='opacity-0 cursor-pointer button-solid button-solid-header'
          >
            Contratar servicio
          </Link>
          <OfertaLaboralButton />
        </div>
      </div>
    </div>
  );
}