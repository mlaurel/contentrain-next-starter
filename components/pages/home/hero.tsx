// Import necessary dependencies
import React from "react";
import AppButton from "../../global/app-button";
import { IHomeHero } from "../../../interfaces/contentrain";

type Props = {
  heroData: IHomeHero;

}
const Hero = ({ heroData } :Props) => {
  return (
    <section className="main-hero-bg py-10 md:pt-[160px] md:pb-[104px]">
      <div className="container flex flex-wrap justify-center text-center max-w-4xl">
        <h1 className="block font-aeonik font-medium text-3xl md:text-6xl md:leading-tight mb-6">
          {heroData.title}
        </h1>

        <div className="w-full" />

        <p className="block text-sm md:text-xl text-gray-600 font-normal mb-8">
          {heroData.description}
        </p>

        <div className="flex justify-center w-full mb-10 lg:mb-16 space-x-4">
          <AppButton
            label={heroData.leftbuttonlabel}
            href={heroData.leftbuttonlink}
          />
          <AppButton
            type="ghost"
            label={heroData.rightbuttonlabel}
            href={heroData.rightbuttonlink}
          />
        </div>

        <img
          src={heroData.imagesrc.split('public')[1]}
          alt={heroData.imagealt}
          className="max-w-7xl w-full"
        />
      </div>
    </section>
  );
};

export default Hero;

