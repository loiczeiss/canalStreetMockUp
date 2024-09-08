import Image from "next/image";
import Link from "next/link";
import CanalLogo from "@/public/canalLogo.svg";
import HamburgerMenu from "@/public/hamburgerMenu.svg";
import Close from "@/public/close.svg"
import styles from  "./styles.module.css"
export default function NavMobile() {
  return (
    <>
      <Image
        className="fixed top-8 left-8 z-0"
        src={CanalLogo}
        alt="canal street market logo"
      />

      <Image
        className="fixed top-12 right-8"
        src={HamburgerMenu}
        alt="hamburger menu icon"
      />
      <div className="w-full h-screen bg-black z-10 fixed	overflow-y-scroll			">
      <Image className='fixed top-12 right-8 ' width={30} src={Close} alt="closeButton"/>
        <div className="flex flex-col w-full h-[85dvh] bg-white">
            <div className="flex w-full h-1/2 bg-gray-400">
            <div className="flex w-1/2 items-center justify-center"><Link href="/">About</Link></div>
            <div className={`${styles.food} flex w-1/2 items-center justify-center`}><Link href="/food">Food</Link></div>
            </div>
            <div className="flex w-full h-1/2 bg-gray-400">
            <div className={`${styles.retail} flex w-1/2 items-center justify-center`}><Link href="/retail">Retail</Link></div>
            <div className={`${styles.community} flex w-1/2 items-center justify-center`}><Link href="/community">Community</Link></div>
            </div>
        </div>
        <div className="bg-white px-8 py-8">
            <a className="border border-black w-full block px-4 py-4 text-center" href="/">Become a vendor</a>
            <p>rgkjnrbn</p>
        </div>
      </div>
    </>
  );
}
