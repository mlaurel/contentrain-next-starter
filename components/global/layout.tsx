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
// Types
export interface HeaderData {
  ID: string;
  logosrc: string;
  logoalt: string;
  leftbuttonlabel: string;
  leftbuttonlink: string;
  rightbuttonlabel: string;
  rightbuttonlink: string;
  status: string;
  updatedAt: string;
}
export interface NavigationItem {
  ID: string;
  name: string;
  to?: string;
}
export interface FooterBannerData {
  ID: string;
  title: string;
  status: string;
  updatedAt: string;
  logosrc: string;
  logoalt: string;
  leftbuttonlabel: string;
  leftbuttonlink: string;
  rightbuttonlabel: string;
  rightbuttonlink: string;
}
export interface FooterData {
  ID: string;
  description: string;
  status: string;
  updatedAt: string;
  logosrc: string;
  logoalt: string;
  leftbottomtext: string;
  middlebottomtext: string;
}
export interface SocialLinksData {
  ID: string;
  name: string;
  link: string;
}
type LayoutStaticContentType = {
  headerData: HeaderData;
  navigationItems: NavigationItem[];
  footerBanner: FooterBannerData;
  footerData: FooterData;
  socialLinks: SocialLinksData[];
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
