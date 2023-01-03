import classNames from "classnames";
import Link from "next/link";
import { FC, Fragment } from "react";
import { Logo } from "../Logo";
import { NavMenu } from "./NavMenu";
interface AppBarProps {
  className: string
}

export const AppBar: FC<AppBarProps> = ({ className }) => {
  return (
    <>
      <header className={classNames("fixed bg-bg-dark top-0 left-0 right-0 z-10", className)}>
        <Link href="/" passHref>
          <button className="flex items-center px-4 py-4 m-auto">
            <Logo size={40} />
            <h1 className="grow ml-2 text-xl font-semibold">
              <span className="text-primary">A</span>lfian&nbsp;
              <span className="text-primary">H</span>anantio
            </h1>
          </button>
        </Link>
        <div className="flex flex-col items-center justify-center px-2">
          <div className="py-2 px-2 w-full max-w-xl bg-window-bar-dark rounded-t-xl flex flex-row items-center gap-2">
            <span className="w-3 h-3 bg-window-action-red rounded-full" />
            <span className="w-3 h-3 bg-window-action-yellow rounded-full" />
            <span className="w-3 h-3 bg-window-action-green rounded-full" />
          </div>
          <NavMenu />
        </div>
      </header>
    </>
  );
};
