"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const navLinks = [
  {
    title: "About",
    path: "#about",
  }, 
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      // Redirect to a dynamic URL based on input value
      window.location.href = `/animeSearch/${encodeURIComponent(inputValue)}`;
    }
  };



  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-2 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-5 py-2">
        <Link
          href={"/"}
          className="text-1xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-secondary-600 font-semibold"
        >
          Anime-Marker
        </Link>
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter search term"
             className="px-6 inline-block py-3   rounded-full mr-4 bg-gradient-to-br  hover:bg-slate-200 text-white"

      />
          <Link href={`/animeSearch/${inputValue}`}>

      <button type="submit"  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-500 to-secondary-500 hover:bg-slate-200 text-white">Search</button>
          </Link>
    </form>
     </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
