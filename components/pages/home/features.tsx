// components/FeaturesSection.tsx
import { RiFile3Line } from "react-icons/ri"; 
import AppButton from "../../global/app-button";
import { IHomeFeatures } from "../../../interfaces/contentrain";

type Props = {
  featuresData: IHomeFeatures[];
};

const FeaturesSection = ({ featuresData }: Props) => {
  return (
    <section className="container py-10 md:py-[144px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {featuresData.map((item, i) => (
          <div
            key={`item-${i}`}
            className="p-8 rounded-xl border border-indigo-50 bg-gradient-to-b from-[#F5FAFF] to-transparent hover:shadow-[0_0_0_4px_rgba(59,130,246,0.40)]"
          >
            <span className="inline-block p-3 mb-5 rounded-xl text-primary-500 bg-gradient-to-b from-[#3b82f621] to-transparent border border-[#E9F0F9]">
            <RiFile3Line size={32}></RiFile3Line>
            </span>
            <h2 className="md:text-lg font-medium mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600 line-clamp-2 mb-6">
              {item.description}
            </p>
            <AppButton
              type="ghost"
              size="md"
              href={item.buttonlink}
              label={item.buttonlabel}
            ></AppButton>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

