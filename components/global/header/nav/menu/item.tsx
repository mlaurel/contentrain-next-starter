// components/MainNavbarItem.tsx

import Link from "next/link";
import { useMenu } from "../../nav-menu-content";
import { INavigationItem } from "../../../../../interfaces/contentrain";

type Props = {
  navItem: INavigationItem;
};
const HeaderNavMenuItem = ({ navItem }: Props) => {
  const { setMenu } = useMenu();
  return (
    <li className="main-navbar__item">
      <Link
        href={navItem.to || "/"}
        passHref
        className="main-navbar__link hover:text-primary-500"
        title={navItem.name}
        onClick={() => setMenu(false)}
      >
        <span>{navItem.name}</span>
      </Link>
    </li>
  );
};

export default HeaderNavMenuItem;

