// components/MainNavbarList.tsx

import { INavigationItem } from "../../../../../interfaces/contentrain";
import HeaderNavMenuItem from "./item";
type Props = {
  navItems: INavigationItem[];
};

const NavMenuList = ({navItems}:Props) => {
  return (
    <ul className="main-navbar__list">
      {navItems.map((navItem, i) => (
        <HeaderNavMenuItem key={`nav-item-${i}`} navItem={navItem} />
      ))}
    </ul>
  );
};

export default NavMenuList;
