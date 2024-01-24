// components/FeaturesOverviewSection.tsx

import Link from "next/link";
import React, { useState } from "react";
import AppButton from "../../global/app-button";
import { IHomeFeaturesOverview, IHomeFeaturesOverviewItem } from "../../../interfaces/contentrain";


type FeaturesOverviewSectionProps = {
  featuresOverview: IHomeFeaturesOverview;
  featuresOverviewItems: IHomeFeaturesOverviewItem[];
};

const FeaturesOverviewSection = ({
  featuresOverview,
  featuresOverviewItems,
}: FeaturesOverviewSectionProps) => {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="container py-10 md:py-[144px] flex flex-wrap justify-center text-center">
      <span className="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm">
        {featuresOverview.subtitle}
      </span>

      <div className="w-full" />

      <h2 className="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto">
        {featuresOverview.title}
      </h2>

      <div className="w-full" />

      <p className="block xl:max-w-3xl text-sm md:text-base text-gray-600 font-normal mb-16">
        {featuresOverview.description}
      </p>

      <div className="flex flex-wrap md:flex-nowrap w-full max-w-7xl gap-4">
        <div className="overflow-auto md:w-[50%]">
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-4 font-medium h-full">
            {featuresOverviewItems.map((item, i) => (
              <button
                key={`item-${i}`}
                onClick={() => setActive(i)}
                className={`border border-indigo-50 hover:border-indigo-200 hover:from-[#3b82f621] hover:shadow-[inset_0_0_0_2px_rgba(59,130,246,0.40)] rounded-xl bg-gradient-to-b to-transparent md:w-full p-3 md:p-6 text-left whitespace-nowrap ${
                  active === i ? "from-[#3b82f621]" : "from-[#F5FAFF]"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex md:w-[50%]">
          {featuresOverviewItems.map((item, i) => (
            <React.Fragment key={`item-${i}`}>
              {active === i && (
                <Link
                  href={item.buttonlink}
                  className="block border-2 border-indigo-50 rounded-xl overflow-hidden bg-gradient-to-b from-[#F5FAFF] to-transparent w-full px-6 pt-6 text-center"
                >
                  <h3 className="font-medium text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <AppButton
                    type="ghost"
                    size="sm"
                    label="Learn More"
                  ></AppButton>
                  <div className="border-t border-l border-r rounded-t-xl h-[230px] overflow-hidden mt-6">
                    <img
                      src={item.imagesrc.split("public")[1]}
                      alt={item.imagealt}
                      height="200"
                      width="100%"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;

