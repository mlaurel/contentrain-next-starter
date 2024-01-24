// components/HeaderNavWrapper.tsx

import AppButton from "../../app-button";
import Auth from "../auth";
import SocialLinks from "../../social-links";
import { RiCloseLine } from "react-icons/ri";
import NavMenuList from "./menu/list";
import { useMenu } from "../nav-menu-content";
import { IHeader, INavigationItem, ISocialLink } from "../../../../interfaces/contentrain";
type Props = {
  navigationItemsData: INavigationItem[];
  headerData: IHeader;
  socialLinks: ISocialLink[];
};

const HeaderWrapper = ({
  navigationItemsData,
  headerData,
  socialLinks,
}: Props) => {
  const { setMenu, isMenuOpen } = useMenu();

  return (
    <nav
      className={`main-navbar ${isMenuOpen ? "shown" : ""}`}
    >
      <div className="flex justify-end self-start p-8 w-full lg:hidden py-3">
        <AppButton
          type="ghost"
          onClick={() => setMenu(false)}
        >
          {<RiCloseLine className="text-md text-slate-400"></RiCloseLine>}
        </AppButton>
      </div>

      <NavMenuList navItems={navigationItemsData} />
      <div className="self-end p-6 w-full lg:hidden">
        <Auth headerData={headerData} />
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </nav>
  );
};

export default HeaderWrapper;

