// components/ResourcesSection.tsx

import Link from "next/link";

import { Ri4KLine } from "react-icons/ri";
import { IResourcesItem, IResourceshero } from "../../interfaces/contentrain";
interface ResourcesSectionProps {
  resources: IResourceshero;
  resourcesItems: IResourcesItem[];
}

const ResourcesSection = ({
  resources,
  resourcesItems,
}: ResourcesSectionProps) => {
  return (
    <section className="py-10 md:py-[192px] bg-gradient-to-b from-[#0331FC]/[0.08] to-transparent">
      <div className="container max-w-7xl">
        <div className="text-center md:pb-4">
          <span className="py-1.5 px-4 rounded-full bg-indigo-100 text-primary-700 font-medium text-sm">
            {resources?.subtitle}
          </span>
          <h2 className="block font-aeonik font-medium text-3xl md:text-4xl md:leading-tight xl:max-w-3xl my-6 mx-auto">
            {resources?.title}
          </h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {resourcesItems.map((item, i) => (
            <div
              key={`item-${i}`}
              className={`w-full md:w-[calc(50%-8px)] group cursor-pointer rounded-xl ${item.color}`}
            >
              <Link
                href={item.link}
                className="flex rounded-xl items-center p-6 text-white md:min-h-[140px] min-h-[88px] hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]"
              >
                <span>
                  {/* Iconlar duzeltilecek */}
                  <Ri4KLine size={28} />
                </span>
                <h3 className="text-sm md:text-lg font-medium ml-4 flex-grow">
                  {item.title}
                </h3>
                <Ri4KLine size={28} />

                <span className="invisible group-hover:visible">
                  <Ri4KLine size={28} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;

