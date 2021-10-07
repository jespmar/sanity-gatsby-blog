import { Link } from "gatsby";
import React from "react";
import { cn } from "../lib/helpers";
import Icon from "./icon";


import * as styles from "./header.module.css";
import "../styles/global.css";

const Header = ({ showNav, siteTitle, logo }) => (
  <div className="text-white bg-blue-800 shadow-md z-50 w-full px-5 py-2">
    <div className="max-w-7xl mx-auto">
      <div className="w-full flex justify-between">
        <Link to="/">
          <img className="h-12" src={logo} />
        </Link>

        <Link className="self-center font-semibold" to="/">
        <button
            className="self-center bg-gray-800 p-2 rounded text-white block lg:hidden"
            // </div>onClick={showNav ? onHideNav : onShowNav}
          >
            <Icon symbol="hamburger" />
          </button>
        </Link>
        {/*         <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button> */}
      </div>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to="/archive/">Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
