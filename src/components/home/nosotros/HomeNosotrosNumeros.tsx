'use client';

import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';

export default function HomeNosotrosNumeros() {
  const numbersToAnimate = {
    years: 0,
    clients: 0,
    collaborators: 0,
    workHours: 0,
    workDays: 0,
  };
  const numbersToAnimateCompleted = {
    years: 13,
    clients: 40,
    collaborators: 100,
    workHours: 24,
    workDays: 7,
  };

  useEffect(() => {
    const target = document.getElementById('n-container') as HTMLElement;
    const numberExp = document.querySelector('#n-experience') as HTMLElement;
    const numberClients = document.querySelector('#n-clients') as HTMLElement;
    const numberCollaborators = document.querySelector('#n-collaborators') as HTMLElement;
    const numberSchedule = document.querySelector('#n-schedule') as HTMLElement;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: numbersToAnimate,
            years: numbersToAnimateCompleted.years,
            clients: numbersToAnimateCompleted.clients,
            collaborators: numbersToAnimateCompleted.collaborators,
            workHours: numbersToAnimateCompleted.workHours,
            workDays: numbersToAnimateCompleted.workDays,
            easing: 'linear',
            round: 1,
            update: () => {
              numberExp.innerHTML = `
                  <span class='text-eco-green'>+</span>
                  ${numbersToAnimate.years}
              `;
              numberClients.innerHTML = `
                  <span class='text-eco-green'>+</span>
                  ${numbersToAnimate.clients}
              `;
              numberCollaborators.innerHTML = `
                  <span class='text-eco-green'>+</span>
                  ${numbersToAnimate.collaborators}
              `;
              numberSchedule.innerHTML = `
                  <span class='text-eco-green'>+</span>
                  ${numbersToAnimate.workHours}
                  <span class='text-eco-green'>/</span>
                  ${numbersToAnimate.workDays}
              `;
            }
          });

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    if (target !== null) {
      observer.observe(target);
    }

  }, []);

  return (
    <div className="w-full py-16 text-black bg-white" id='n-container'>
      <div className="container px-4">
        <div className="w-full grid grid-cols-2 max-w-[420px] md:max-w-[100%] md:grid-cols-4 mx-auto gap-2 auto-rows-auto">
          <div className="max-w-[180px] w-full mx-auto relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[40px] h-[6px] bg-eco-sky-blue" />

            <div className="flex flex-col items-center justify-center w-full h-full px-1 pt-4 pb-8 text-center md:pb-0">
              <h3 id='n-experience' className="pb-4 text-5xl font-bold text-eco-blue--dark">
                <span className='text-eco-green'>+</span>
                <span>{numbersToAnimate.years}</span>
              </h3>
              <p className="text-sm font-semibold sm:text-base text-eco-gray">
                Años de experiencia
              </p>
            </div>
          </div>
          {/*  */}
          <div className="max-w-[170px] w-full mx-auto relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[40px] h-[6px] bg-eco-sky-blue" />
            <div className="flex flex-col items-center justify-center w-full h-full px-1 pt-4 pb-8 text-center md:pb-0">
              <h3 id='n-clients' className="pb-4 text-5xl font-bold text-eco-blue--dark">
                <span className='text-eco-green'>+</span>
                <span >{numbersToAnimate.clients}</span>
              </h3>
              <p className="text-sm font-semibold sm:text-base text-eco-gray">
                Clientes
              </p>
            </div>
          </div>

          <div className="max-w-[170px] w-full mx-auto relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[40px] h-[6px] bg-eco-sky-blue" />
            <div className="flex flex-col items-center justify-center w-full h-full px-1 pt-4 pb-8 text-center md:pb-0">
              <h3 id="n-collaborators" className="pb-4 text-5xl font-bold text-eco-blue--dark">
                <span className='text-eco-green'>+</span>
                <span >{numbersToAnimate.collaborators}</span>
              </h3>
              <p className="text-sm font-semibold sm:text-base text-eco-gray">
                Colaboradores
              </p>
            </div>
          </div>

          <div className="max-w-[170px] w-full mx-auto relative flex items-center justify-center">
            <div className="absolute top-0 left-0 w-[40px] h-[6px] bg-eco-sky-blue" />
            <div className="flex flex-col items-center justify-center w-full h-full px-1 pt-4 pb-8 text-center md:pb-0">
              <h3 id='n-schedule' className="flex items-center pb-4 text-5xl font-bold text-eco-blue--dark">
                <span className='text-eco-green'>+</span>
                <span>{numbersToAnimate.workHours}</span>
                <span className="text-eco-green">/</span>
                <span>{numbersToAnimate.workDays}</span>
              </h3>
              <p className="text-sm font-semibold sm:text-base text-eco-gray">
                Horario de trabajo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}