import React from "react";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "./layout.module.css";
import Section from "./section";
import UserProvider from "../context/user";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  logo,
  sections,
  set,
  active,
}) => (
  <UserProvider>
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      logo={logo}
    />

    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="wrapper">
          <div className="sidebar p-4 hidden lg:block w-80">
            {sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                set={set}
                active={active}
              />
            ))}
          </div>
          <div className="main w-full">{children}</div>
          <div className="sidebar p-4 hidden xl:block w-72">Sticky sidebar</div>
        </div>
      </div>
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.siteInfo}>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </UserProvider>
);

export default Layout;
