// components/Header.tsx

import AppButton from "../app-button";
import Logo from "../logo";
import Auth from "./auth";
import HeaderNavWrapper from "./nav/wrapper";
import useNavMenu from "../../../lib/useNavMenu";
import { RiMenu3Line } from "react-icons/ri";
import { HeaderData, NavigationItem, SocialLinksData } from "../layout";

type Props = {
  headerData: HeaderData;
  navigationItems: NavigationItem[];
  socialLinks: SocialLinksData[];
};

const HeaderWrapper = ({ headerData, navigationItems, socialLinks }: Props) => {
  const { show, setMenuShow } = useNavMenu();
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
          <AppButton
            type="ghost"
            onClick={() => setMenuShow(!show)}
          >
            <RiMenu3Line size={20} />
          </AppButton>
        </div>
      </div>
    </header>
  );
};

export default HeaderWrapper;

