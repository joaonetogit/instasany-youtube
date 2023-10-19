// Core
import React from 'react';
import Image from 'next/image';

// Medias
import MainMockup from '/public/assets/mockup-main.png';
import Card01 from '/public/assets/image-01.png';
import Card02 from '/public/assets/image-02.png';
import Card03 from '/public/assets/image-03.png';
import Card04 from '/public/assets/image-04.png';
import Card05 from '/public/assets/image-05.png';
import Card06 from '/public/assets/image-06.png';

const SectionCards = () => {
  return (
    <section className="w-full pt-20 pb-20">
      <Image
        src={MainMockup}
        alt="Main mockup"
        className="sticky top-28 mx-auto -mt-[36rem] mb-16 z-10"
      />
      <h2 className="text-center text-7xl font-semibold text-black mb-56">
        Faça <span className="text-green-title-card">você</span> mesmo de casa
      </h2>

      <div className="relative w-full max-w-images-cards mx-auto h-images-cards ">
        <Image src={Card01} alt="Imagem 1" className="absolute top-8 left-44" />
        <Image
          src={Card02}
          alt="Imagem 2"
          className="absolute bottom-32 left-0"
        />
        <Image src={Card03} alt="Imagem 3" className="absolute bottom-0 left-80" />
        <Image src={Card04} alt="Imagem 4" className="absolute top-0 right-32" />
        <Image src={Card05} alt="Imagem 5" className="absolute right-0 bottom-28" />
        <Image src={Card06} alt="Imagem 6" className="absolute bottom-0 right-80" />
      </div>
    </section>
  );
};

export default SectionCards;
