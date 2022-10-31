import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  details: string;
};

const PokemonCard = ({ name, image, details }: Props) => {
  return (
    <div className="group relative h-52 w-full lg:h-auto flex flex-row items-center px-2 overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={name}
        height={100}
        width={100}
        className="lg:w-24 w-[150px] object-contain group-hover:scale-150 ease-in-out duration-200"
      />
      <div className="flex flex-col items-start">
        <span className="lg:text-xl text-4xl text-white font-bold uppercase leading-none">
          {name}
        </span>
        <span className="lg:text-sm text-4xl text-white opacity-70 leading-none">{details}</span>
      </div>
      <div className="absolute inset-0 w-full h-full z-[-1] bg-gradient-to-t from-[#000000d6] to-[#00000040] opacity-90" />

      <Image
        src={image}
        alt={name}
        fill
        sizes="33vw"
        className="absolute inset-0 w-full h-full z-[-3] object-cover scale-[7] blur-xl"
      />
    </div>
  );
};

export default PokemonCard;
