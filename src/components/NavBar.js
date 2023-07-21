import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const NavLinks = links.map((section) => {
    return <a key={section} href={'#'+section} >{section}</a>
  })
  return <nav>{NavLinks}</nav>;
}

export default NavBar;
