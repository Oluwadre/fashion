import React from "react";
import Image from "next/image";
import heroImage from "../../../public/hero.jpg"; 

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center  overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroImage}
          alt="Fashion background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Redefining Fashion
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Experience the latest collection from our visionary designers
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          View Collection
        </button>
      </div>
    </section>
  );
};

export default Hero;
