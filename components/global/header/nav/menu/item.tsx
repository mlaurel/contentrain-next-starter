// components/MainNavbarItem.tsx

import Link from "next/link";
import { NavigationItem } from "../../../layout";

type Props = {
  navItem: NavigationItem;
};
const HeaderNavMenuItem = ({ navItem }: Props) => {
  return (
    <li className="main-navbar__item">
      <Link
        href={navItem.to || "/"}
        passHref
        className="main-navbar__link hover:text-primary-500"
        title={navItem.name}
      >
        <span>{navItem.name}</span>
      </Link>
    </li>
  );
};

export default HeaderNavMenuItem;

