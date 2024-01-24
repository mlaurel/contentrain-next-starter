import { ReactNode } from 'react';
import AppButton from '../app-button';
import Image from 'next/image';
import { IFooterBanner } from '../../../interfaces/contentrain';


interface FooterBannerProps {
  footerBannerData: IFooterBanner;
  children?: ReactNode;
}

const FooterBanner: React.FC<FooterBannerProps> = ({ footerBannerData }) => {
  return (
    <section className="banner-bg max-w-5xl mx-auto border rounded-[40px] shadow-sm">
      <div className="container flex flex-col flex-wrap justify-center text-center max-w-xl py-24">
        <span className="pb-10 mx-auto">
          <Image
            height="80"
            width="80"
            className="object-cover"
            src={footerBannerData?.logosrc.split('public')[1]}
            alt={footerBannerData?.logoalt}
          />
        </span>
        <h1 className="block font-aeonik font-medium text-3xl md:text-5xl md:leading-tight pb-8">
          {footerBannerData.title}
        </h1>

        <div className="w-full" />

        <div className="flex justify-center w-full">
          <AppButton label={footerBannerData?.leftbuttonlabel} href={footerBannerData?.leftbuttonlink} className="mr-1" />
          <AppButton type="ghost" label={footerBannerData?.rightbuttonlabel} href={footerBannerData?.rightbuttonlink} className="ml-1" />
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
