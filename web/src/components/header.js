import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import * as styles from "./header.module.css";
import "../styles/global.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, logo }) => (
  <div className="fixed text-white bg-blue-800 shadow-md z-50 w-full px-5 py-2">
    <div className="max-w-7xl mx-auto">
      <div className="w-full flex justify-around">
      <Link  to="/"><img
            className="h-12"
            src={logo}
          /></Link>
      
        <Link className="self-center font-semibold" to="/">{siteTitle}</Link>
{/*         <button
        className={styles.toggleNavButton}
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button> */}
      </div>

      

      <nav className={cn(styles.nav, showNav && styles.showNav )}>
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
