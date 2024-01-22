// components/MainNavbarList.tsx

import { NavigationItem } from "../../../layout";
import HeaderNavMenuItem from "./item";
type Props = {
  navItems: NavigationItem[];
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
