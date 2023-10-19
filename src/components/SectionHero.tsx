// Core
import React from 'react';
import Image from 'next/image';

// Medias
import IconFile from '/public/assets/icon-file.svg';
import IconHand from '/public/assets/icon-hand.svg';
import IconHand02 from '/public/assets/icon-hand-02.svg';
import EmptyMockup from '/public/assets/mockup.svg';
import MainMockup from '/public/assets/mockup-main.png';

// Componentes
import GridContainer from './Grid';

const SectionHero = () => {
  return (
    <section className="relative w-full bg-hero bg-no-repeat bg-top bg-green-primary h-section-hero border-t border-t-green-border pt-[70px] overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
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
            src={EmptyMockup}
            alt="Empty mockup"
            className="relative -rotate-12 top-[18px] left-[53px]"
          />
          <Image src={MainMockup} alt="Main mockup" />
          <Image
            src={EmptyMockup}
            alt="Empty mockup"
            className="relative rotate-12 top-[18px] right-[53px]"
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionHero;
