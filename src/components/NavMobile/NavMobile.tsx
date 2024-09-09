"use client";

import Image from "next/image";
import Link from "next/link";
import CanalLogo from "@/public/canalLogo.svg";
import HamburgerMenu from "@/public/hamburgerMenu.svg";
import Close from "@/public/close.svg";
import FBLogo from "@/public/facebook.svg";
import Instalogo from "@/public/instagram.svg";
import styles from "./styles.module.css";
import { apercuFont } from "@/app/layout"; // Ensure the correct path to layout
import { useState } from "react";

// Define constants for menu states
const MENU_STATE = {
  CLOSED: 0,
  ABOUT: 1,
  FOOD: 2,
  RETAIL: 3,
  COMMUNITY: 4,
};

export default function NavMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(MENU_STATE.CLOSED);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  function handleCloseAndRedirect(state: number) {
    setMenuAnimation(state);
    setTimeout(() => {
      setIsMenuOpen(false);
      setMenuAnimation(MENU_STATE.CLOSED);
    }, 2000);
  }

  return (
    <>
      <Image
        className="fixed top-8 left-8 z-0"
        src={CanalLogo}
        alt="canal street market logo"
      />

      <Image
        onClick={handleOpenMenu}
        className="fixed top-12 right-8"
        src={HamburgerMenu}
        alt="hamburger menu icon"
      />

      <div
        className={`${
          apercuFont.className
        } w-full h-screen bg-black z-10 fixed overflow-y-scroll ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Image
          onClick={handleCloseMenu}
          className="fixed top-12 right-8"
          width={30}
          src={Close}
          alt="closeButton"
        />

        <div className="relative w-full h-[85dvh] bg-white">
          {/* <div
            className={`${menuAnimation === MENU_STATE.CLOSED ? "h-1/2" : ""} ${
              menuAnimation === MENU_STATE.ABOUT || menuAnimation === MENU_STATE.FOOD ? "h-full" : ""
            } ${menuAnimation > MENU_STATE.FOOD ? "h-0" : ""} flex w-full bg-gray-400`}
          > */}
          <Link
            onClick={() => handleCloseAndRedirect(MENU_STATE.ABOUT)}
            className={`${styles.about} ${
              menuAnimation === MENU_STATE.ABOUT ? styles.animate : ""
            } 
              ${
                menuAnimation === MENU_STATE.ABOUT ? "z-50" : ""
              } flex w-1/2 items-center justify-center 
            `}
            href="/"
          >
            <p className="transform -rotate-45 text-xl">About</p>
          </Link>

          <Link
            onClick={() => handleCloseAndRedirect(MENU_STATE.FOOD)}
            className={`${styles.food} ${
              menuAnimation === MENU_STATE.FOOD ? styles.animate : ""
            } 
              ${menuAnimation === MENU_STATE.FOOD ? "z-50" : ""}
              flex w-1/2 items-center justify-center
               
               `}
            href="/food"
          >
            <p className="transform rotate-45 text-xl">Food</p>
          </Link>
          {/* </div> */}

          {/* <div
            className={`${menuAnimation === MENU_STATE.CLOSED ? "h-1/2" : ""} ${
              menuAnimation === MENU_STATE.RETAIL || menuAnimation === MENU_STATE.COMMUNITY ? "h-full" : ""
            } ${
              menuAnimation < MENU_STATE.RETAIL && menuAnimation > MENU_STATE.CLOSED ? "h-0" : ""
            } flex w-full bg-gray-400`}
          > */}
          <Link
            onClick={() => handleCloseAndRedirect(MENU_STATE.RETAIL)}
            href="/retail"
            className={` ${styles.retail} ${
              menuAnimation === MENU_STATE.RETAIL ? styles.animate : ""
            } 
              
              ${menuAnimation === MENU_STATE.RETAIL ? "z-50" : ""}
              flex w-1/2 items-center justify-center 
      
              `}
          >
            <p className="transform rotate-45 text-xl">Retail</p>
          </Link>

          <Link
            onClick={() => handleCloseAndRedirect(MENU_STATE.COMMUNITY)}
            className={`${styles.community} ${
              menuAnimation === MENU_STATE.COMMUNITY ? styles.animate : ""
            }
              ${menuAnimation === MENU_STATE.COMMUNITY ? "z-50" : ""}
              
              flex w-1/2 items-center justify-center 
          
              `}
            href="/community"
          >
            <p className="transform -rotate-45 text-xl">Community</p>
          </Link>
          {/* </div> */}
        </div>

        <div className="bg-white px-8 py-8">
          <a
            className="border border-black w-full block px-4 py-4 text-center mb-8 font-bold"
            href="/"
          >
            become a vendor
          </a>

          <p className="text-m mb-8">
            265 Canal Street <br />
            New York, New York
          </p>

          <p className="text-m mb-8">
            Food Hall Hours:
            <br />
            Mon – Sun: 11AM- 8PM
          </p>

          <p className="text-m mb-8">
            Retail Market Hours:
            <br />
            Thurs – Sun: 11AM- 7PM
          </p>

          <a className="underline" href="mailto:info@canalstreet.market">
            Email us
          </a>

          <div className="flex justify-between mt-8">
            <a
              href="https://www.facebook.com/canalstreetmarket"
              className="w-1/2 border border-black py-8 mr-2 flex justify-center"
            >
              <Image src={FBLogo} alt="facebook logo" width={35} />
            </a>

            <a
              href="https://www.instagram.com/canalstreetmarket"
              className="w-1/2 border border-black py-8 ml-2 flex justify-center"
            >
              <Image src={Instalogo} alt="instagram logo" width={25} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
