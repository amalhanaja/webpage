import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { FiHome } from "react-icons/fi";

interface MenuItemProps {
  link: string;
  isActive: boolean;
  children: ReactElement;
}

const MenuItem: FC<MenuItemProps> = ({ link, isActive, children }) => {
  return (
    <Link href={link} passHref>
      <div
        className={classNames(
          "flex items-center p-2 hover:cursor-pointer hover:bg-nav-100-dark",
          { "bg-nav-100-dark": isActive },
          { "bg-nav-200-dark": !isActive }
        )}
      >
        {children}
      </div>
    </Link>
  );
};
// export const NavMenu : FC<>
export const NavMenu: FC<{}> = () => {
  const route = useRouter();

  const menus: MenuItemProps[] = [
    {
      link: "/",
      isActive: true,
      children: <FiHome size={24} className="m-auto" />,
    },
    {
      link: "/posts",
      isActive: true,
      children: <span>Posts</span>,
    },
    {
      link: "/projects",
      isActive: true,
      children: <span>Projects</span>,
    },
    {
      link: "/uses",
      isActive: true,
      children: <span>Uses</span>,
    },
    {
      link: "/contacts",
      isActive: true,
      children: <span>Contact</span>,
    },
  ];
  return (
    <nav className="w-full max-w-xl bg-nav-300-dark flex flex-row">
      {menus.map((v) => (
        <MenuItem key={v.link} link={v.link} isActive={route.asPath === v.link}>
          {v.children}
        </MenuItem>
      ))}
    </nav>
  );
};
