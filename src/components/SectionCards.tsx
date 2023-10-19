'use client';

// Core
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Libraries
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Medias
import MainMockup from '/public/assets/mockup-main.png';
import Card01 from '/public/assets/image-01.png';
import Card02 from '/public/assets/image-02.png';
import Card03 from '/public/assets/image-03.png';
import Card04 from '/public/assets/image-04.png';
import Card05 from '/public/assets/image-05.png';
import Card06 from '/public/assets/image-06.png';

const SectionCards = () => {
  const sectionRef = useRef(null);
  const mockupRef = useRef(null);
  const titleRef = useRef(null);

  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);

  const section = sectionRef.current;

  function animateCards(images: any, position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: '60% center',
        },
      },
    );
  }

  useEffect(() => {
    const mockupPhone = mockupRef.current;
    const title = titleRef.current;

    gsap.fromTo(
      mockupPhone,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power4.out',
      },
    );

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: '50% center',
        },
      },
    );

    const card01 = card01Ref.current;
    const card02 = card02Ref.current;
    const card03 = card03Ref.current;
    const card04 = card04Ref.current;
    const card05 = card05Ref.current;
    const card06 = card06Ref.current;

    const leftImages = [card01, card02, card03];
    const rightImages = [card04, card05, card06];

    animateCards(leftImages, 50);
    animateCards(rightImages, -50);
  }, []);

  return (
    <section ref={sectionRef} className="w-full pt-20 pb-20">
      <Image
        ref={mockupRef}
        src={MainMockup}
        alt="Main mockup"
        className="opacity-0 sticky top-28 mx-auto -mt-[36rem] mb-16 z-10"
      />
      <h2
        ref={titleRef}
        className="text-center text-7xl font-semibold text-black mb-56 opacity-0"
      >
        Faça <span className="text-green-title-card">você</span> mesmo de casa
      </h2>

      <div className="relative w-full max-w-images-cards mx-auto h-images-cards ">
        <Image
          ref={card01Ref}
          src={Card01}
          alt="Imagem 1"
          className="absolute top-8 left-44"
          />
        <Image
          ref={card02Ref}
          src={Card02}
          alt="Imagem 2"
          className="absolute bottom-32 left-0"
          />
        <Image
          ref={card03Ref}
          src={Card03}
          alt="Imagem 3"
          className="absolute bottom-0 left-80"
          />
        <Image
          ref={card04Ref}
          src={Card04}
          alt="Imagem 4"
          className="absolute top-0 right-32"
          />
        <Image
          ref={card05Ref}
          src={Card05}
          alt="Imagem 5"
          className="absolute right-0 bottom-28"
          />
        <Image
          ref={card06Ref}
          src={Card06}
          alt="Imagem 6"
          className="absolute bottom-0 right-80"
        />
      </div>
    </section>
  );
};

export default SectionCards;
