// components/Layout.tsx
import React, { ReactNode } from "react";
// Components
import HeaderWrapper from "./header/wrapper";
import FooterWrapper from "./footer/wrapper";
// Json's import
import headerContent from "../../contentrain/header/header.json";
import navigationContent from "../../contentrain/navigationitems/navigationitems.json";
import footerBannerContent from "../../contentrain/footerbanner/footerbanner.json";
import footerContent from "../../contentrain/footer/footer.json";
import socialLinksContent from "../../contentrain/sociallinks/sociallinks.json";
import { IFooter, IFooterBanner, IHeader, INavigationItem, ISocialLink } from "../../interfaces/contentrain";


type LayoutStaticContentType = {
  headerData: IHeader;
  navigationItems: INavigationItem[];
  footerBanner: IFooterBanner;
  footerData: IFooter;
  socialLinks: ISocialLink[];
};
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const staticProps: LayoutStaticContentType = {
    headerData: headerContent[0],
    navigationItems: navigationContent,
    footerBanner: footerBannerContent[0],
    footerData: footerContent[0],
    socialLinks: socialLinksContent,
  };

  return (
    <div>
      <div className="min-h-[86px]">
        <HeaderWrapper
          headerData={staticProps.headerData}
          navigationItems={staticProps.navigationItems}
          socialLinks={staticProps.socialLinks}
        />
      </div>
      <div>{children}</div>
      <div>
        <FooterWrapper
          socialLinks={staticProps.socialLinks}
          footerBannerData={staticProps.footerBanner}
          footerData={staticProps.footerData}
        />
      </div>
    </div>
  );
};

export default Layout;
