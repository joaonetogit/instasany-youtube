'use client';

// Core
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Libraries
import gsap from 'gsap';

// Medias
import IconFile from '/public/assets/icon-file.svg';
import IconHand from '/public/assets/icon-hand.svg';
import IconHand02 from '/public/assets/icon-hand-02.svg';
import EmptyMockup from '/public/assets/mockup.svg';

// Layout
import GridContainer from './Grid';

const SectionHero = () => {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mockupLeft = mockupLeftRef.current;
    const mockupRight = mockupRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
      },
    );

    gsap.fromTo(
      mockupLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      },
    );

    gsap.fromTo(
      mockupRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      },
    );
  }, []);

  return (
    <section className="relative w-full bg-hero bg-no-repeat bg-top bg-green-primary h-section-hero border-t border-t-green-border pt-[70px] overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div
          ref={textHeroRef}
          className="w-full max-w-text-hero text-center opacity-0"
        >
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo curto focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-[10px]">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="Icon file" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative max-w-icons-hero w-full mt-4 h-28">
          <Image
            src={IconHand}
            alt="Icon hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon hand 02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="aboslute bottom-0 w-full max-w-mockups-hero flex justify-between">
          <Image
            ref={mockupLeftRef}
            src={EmptyMockup}
            alt="Empty mockup"
            className="relative top-[18px] left-[53px]"
          />
          <Image
            ref={mockupRightRef}
            src={EmptyMockup}
            alt="Empty mockup"
            className="relative top-[18px] right-[53px]"
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionHero;
