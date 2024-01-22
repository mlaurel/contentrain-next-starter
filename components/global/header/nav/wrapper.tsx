// components/HeaderNavWrapper.tsx

import { useEffect } from "react";
import AppButton from "../../app-button";
import Auth from "../auth";
import SocialLinks from "../../social-links";
import useNavMenu from "../../../../lib/useNavMenu";
import { RiCloseLine } from "react-icons/ri";
import { HeaderData, NavigationItem, SocialLinksData } from "../../layout";
import NavMenuList from "./menu/list";

type Props = {
  navigationItemsData: NavigationItem[];
  headerData: HeaderData;
  socialLinks: SocialLinksData[];
};

const HeaderWrapper = ({
  navigationItemsData,
  headerData,
  socialLinks,
}: Props) => {
  const { show, setMenuShow } = useNavMenu();
  useEffect(() => {
    console.log("show", show);
  }, [show]);

  return (
    <nav className={`main-navbar ${show ? "shown" : ""}`}>
      <div className="flex justify-end self-start p-8 w-full lg:hidden">
        <AppButton
          type="ghost"
          className="py-3"
          onClick={() => setMenuShow(false)}
          label=""
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

