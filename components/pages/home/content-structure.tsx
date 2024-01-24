// components/ContentStructureSection.tsx

import { IHomeContentStructure } from "../../../interfaces/contentrain";
import AppButton from "../../global/app-button";

type ContentStructureSectionProps = {
  contentStructure: IHomeContentStructure;
};

const ContentStructureSection = ({
  contentStructure,
}: ContentStructureSectionProps) => {
  return (
    <section className="container py-10 md:py-[144px]">
      <div className="flex flex-wrap justify-center pt-10 md:pt-[72px] max-w-7xl mx-auto border border-indigo-50 text-center rounded-lg bg-gradient-to-b from-[#F5FAFF] to-transparent">
        <span className="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm">
          {contentStructure.subtitle}
        </span>
        <div className="w-full" />
        <h2 className="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto">
          {contentStructure.title}
        </h2>
        <div className="w-full" />
        <p className="block xl:max-w-3xl text-sm md:text-base text-gray-600 font-normal mb-8">
          {contentStructure.description}
        </p>
        <div className="flex justify-center w-full mb-10 md:mb-22">
          <AppButton
            label={contentStructure.buttonlabel}
            href={contentStructure.buttonlink}
          ></AppButton>
        </div>
        <div className="h-[220px] w-[80%] xl:w-[60%] mx-auto rounded-t-lg">
          <img
            src={contentStructure.imagesrc.split('public')[1]}
            alt={contentStructure.imagealt}
            height="200"
            width="100%"
            className="h-full w-full object-cover rounded-t-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentStructureSection;

