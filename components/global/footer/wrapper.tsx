// components/FooterWrapper.tsx

import { IFooter, IFooterBanner, ISocialLink } from "../../../interfaces/contentrain";
import Logo from "../logo";
import SocialLinks from "../social-links";
import FooterBanner from "./banner";
type Props = {
  footerData: IFooter;
  footerBannerData: IFooterBanner;
  socialLinks: ISocialLink[];
};

const FooterWrapper = ({
  footerData,
  footerBannerData,
  socialLinks,
}: Props) => {
  return (
    <div>
      <div className="pb-72 lg:px-0 px-3">
        <FooterBanner footerBannerData={footerBannerData} />
      </div>
      <footer className="bg-[#F5FAFF]">
        <div className="container pt-10 md:pt-16 max-w-7xl">
          <div className="text-center mb-10 md:mb-16">
            <Logo logoSrc={footerData?.logosrc} logoAlt={footerData?.logoalt} />
            <p className="block xl:max-w-5xl text-sm md:text-base text-gray-600 mx-auto">
              {footerData?.description}
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap border-t py-3 md:mt-6 text-sm text-gray-700 text-center">
            <div className="w-full lg:w-3/1 py-2 lg:py-1 md:text-left">
              <span>{footerData?.leftbottomtext}</span>
            </div>

            <div className="w-full lg:w-3/1 py-2 lg:py-1 md:text-center">
              <span>{footerData?.middlebottomtext}</span>
            </div>

            <div className="w-full lg:w-3/1 py-2 lg:py-1">
              <SocialLinks socialLinks={socialLinks} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterWrapper;

