// components/Header.tsx

import AppButton from "../app-button";
import Logo from "../logo";
import Auth from "./auth";
import HeaderNavWrapper from "./nav/wrapper";
import { RiMenu3Line } from "react-icons/ri";
import {  useMenu } from "./nav-menu-content";
import { IHeader, INavigationItem, ISocialLink } from "../../../interfaces/contentrain";
type Props = {
  headerData: IHeader;
  navigationItems: INavigationItem[];
  socialLinks: ISocialLink[];
};

const HeaderWrapper = ({ headerData, navigationItems, socialLinks }: Props) => {

 const {setMenu} = useMenu()
  return (
      <header className="flex">
        <div className="container flex justify-between items-center !px-3">
          <div>
            <Logo logoSrc={headerData.logosrc} logoAlt={headerData.logoalt} />
          </div>
          <div>
            <HeaderNavWrapper
              navigationItemsData={navigationItems}
              headerData={headerData}
              socialLinks={socialLinks}
            />
          </div>
          <div className="hidden lg:flex">
            <Auth headerData={headerData} />
          </div>
          <div className="lg:hidden flex items-end">
            <AppButton type="ghost" onClick={() => setMenu(true)}>
              <RiMenu3Line size={20} />
            </AppButton>
          </div>
        </div>
      </header>
  );
};

export default HeaderWrapper;

