import Link from "next/link";
import React from "react";
import { getColorFromString } from "../../../utils/getColorFromString";

type Props = {
  name: string;
  href: string;
};

const GenerationCard = ({ name, href }: Props) => {
  return (
    <Link href={href}>
      <div className="group relative h-53 flex flex-col items-center py-4 rounded-2xl">
        <span className="lg:text-xl text-4xl text-white font-bold uppercase leading-none">
          {name}
        </span>
        <div
          className="absolute inset-0 w-full h-full z-[-1] border-2 rounded-2xl group-hover:scale-105 group-hover:bg-[currenColor] ease-in-out duration-200"
          style={{
            borderColor: getColorFromString(name),
            color: getColorFromString(name),
          }}
        />
        <div className="absolute inset-0 w-full h-full z-[-2] bg-gradient-to-t from-[#000000d6] to-[#00000040] opacity-90" />
      </div>
    </Link>
  );
};

export default GenerationCard;
