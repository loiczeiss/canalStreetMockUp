import styles from "./styles.module.css";
import { apercuFont, ogg } from "@/app/layout";
import Pencil from "@/public/pencil.svg";
import Image from "next/image";
import FacebookImg from "@/public/facebook.svg";
import InstagramImg from "@/public/instagram.svg";
import MailImg from "@/public/mail.svg";

export default function FooterComp() {
  return (
    <>
      <section className="flex flex-col items-center">
        <span className={`${styles.footerActionCall} h-2 w-11/12  m-4`}></span>
        <h4 className={`${ogg.className} text-2xl text-center font-[300]`}>
          Interested in becoming a <br />
          vendor{" "}
        </h4>
        <button className="border border-black p-4 w-11/12 m-4 font-bold">
          click here
        </button>
        <span
          className={`${styles.footerActionCall} h-2 w-11/12  m-4 mb-12`}
        ></span>
        <div
          className={`${styles.customDash} flex flex-col w-11/12 items-center mb-8`}
        >
          <Image src={Pencil} alt="pencil Image" className="mt-8" />
          <p className="mb-8 mt-4">Email us</p>
        </div>
        <div
          className={`${styles.customDash} flex flex-col w-11/12 items-center mb-8`}
        >
          <Image
            src={FacebookImg}
            alt="Facebook Logo "
            width={35}
            className="mt-8"
          />
          <p className="mb-8 mt-4 text-center">
            Follow us <br /> on facebook
          </p>
        </div>
        <div
          className={`${styles.customDash} flex flex-col w-11/12 items-center mb-16`}
        >
          <Image
            src={InstagramImg}
            alt="Instagram Logo "
            width={35}
            className="mt-8"
          />
          <p className="mb-8 mt-4 text-center">
            Follow us <br /> on facebook
          </p>
        </div>
        <div
          className={`${styles.customDash} flex flex-col w-11/12 items-center mb-8`}
        >
          <Image
            src={MailImg}
            alt="letter image "
            width={35}
            className="mt-8"
          />
          <p className="mb-8 mt-4 text-center">Get updates in your inbox</p>
          <form className="w-11/12 border border-black mb-4 flex justify-between">
            <input
              className={`placeholder:font-light placeholder:text-black ml-2   border-none outline-none`}
              type="text"
              name="mail"
              id="mail"
              placeholder="Email"
              
            />
            <input className={`${apercuFont.className} mr-2 font-light`} type="submit"  value={"->"} />

          </form>
        </div>
        <section className="flex flex-col w-11/12  mb-4">
          <div className="flex justify-between mb-4">
            <p className="text-[10px] underline">Privacy Policy</p>
            <p className="text-[10px] underline">Vendor Login</p>
          </div>
          <div className="flex justify-between  mb-4">
            <p className="text-[10px] underline">Site By Loïc Zeiss</p>
            <p className="text-[10px] underline">Copyright Loïc Zeiss</p>
          </div>
        </section>
      </section>
    </>
  );
}
