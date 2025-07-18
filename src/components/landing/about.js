import React from 'react'
import Image from "next/image"
import Dp from "@/components/assets/images/bay dp.jpg"
import Link from 'next/link'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Our Fashion House
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <div className="bg-gray-200 h-full md:h-full rounded-lg overflow-hidden">
              <Image src={Dp} alt="img"/>
              
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 mb-4">
              Founded in 2010, our fashion house has been at the forefront of
              innovative design, blending traditional craftsmanship with
              contemporary aesthetics.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of visionary designers creates collections that challenge
              conventions while maintaining wearability and comfort.
            </p>
            <p className="text-gray-600 mb-6">
              Sustainability is at the core of our philosophy. We source
              materials responsibly and prioritize ethical production methods.
            </p>
            <Link href="about" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-6 rounded transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
