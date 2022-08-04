// Important:
// Make sure to npm install gatsby-plugin-breakpoints
// And add it to gatsby-config with your custom queries
// gatsby-config.js
// const myCustomQueries = {
//     responsiveMenu: "(max-width: 1200px)",
//   };
// module.exports = {
//    plugins: [{
//     resolve: "gatsby-plugin-breakpoints",
//     options: {
//       queries: myCustomQueries,
//     },
//   }]
// }

import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Logo from "../../images/icon.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const breakpoints = useBreakpoint();
  const menuData = [
    {
      id: 1,
      url: "#",
      name: "link1",
    },
    {
      id: 2,
      url: "#",
      name: "link2",
    },
    {
      id: 3,
      url: "#",
      name: "link3",
    },
    {
      id: 4,
      url: "#",
      name: "link4",
    },
  ];
  return (
    <header className={showMenu ? "Navbar Navbar__responsive-menu" : "Navbar"}>
      <div className="Navbar__container">
        <div className="Navbar__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul className="Navbar__links">
            {menuData.map((item) => {
              return (
                <li key={item.id} className="Navbar__link">
                  <Link to={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {breakpoints.responsiveMenu && (
          <div className="Navbar__hamburger-container">
            <div
              className={
                showMenu
                  ? "Navbar__hamburger Navbar__hamburger--animation"
                  : "Navbar__hamburger"
              }
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
