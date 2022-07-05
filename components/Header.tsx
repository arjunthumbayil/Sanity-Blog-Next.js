import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div>
        <Link href='/'>
            <img className="w-44 cursor-pointer object-contain" src="https://links.papareact.com/yvf" alt=""></img>
        </Link>
        <div>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Follow</h3>
        </div>
      </div>
      <div></div>
    </header>
  );
}

export default Header;
