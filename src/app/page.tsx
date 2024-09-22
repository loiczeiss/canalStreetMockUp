import Image from "next/image";
import { ogg } from "./layout";
import styles from "./styles.module.css";
import MarketBW from "@/public/Photos/marketBW.jpg";
import CSMPic from "@/public/Photos/canalStreetMarket.avif";
import InsideShop from "@/public/Photos/insideShop.avif";
import EmployeeTalking from "@/public/Photos/ServerTalking.avif";
import Link from "next/link";
export default function Home() {
  return (
    <div className="main flex flex-col items-center pt-[300px]">
      <section className="hero-section w-10/12">
        <h1 className={`${ogg.className} font-light text-4xl`}>
          Canal Street Market is
          <br /> a carefully curated
          <br /> retail market, food hall
          <br /> and community space open year-round at
          <br /> 265 Canal Street. Support Small Business this weekend.
        </h1>
      </section>
      <section className="img-loader w-full my-16">
        <Image src={MarketBW} alt="black and white market picture " />
      </section>
      <section className="home-column w-10/12">
        <h1 className={`${ogg.className} font-light  text-6xl`}>
          A New Kind of Market
        </h1>{" "}
        <section className="img-loader w-full my-16">
          <Image src={CSMPic} alt="Canal Street Market Front Window " />
        </section>
        <p className="text-[14px] font-[600]">
          Merging retail, food, art, and culture, Canal Street Market highlights
          top retail and design concepts, restaurants, and up-and-coming players
          in the downtown New York City community.
        </p>
        <section className="img-loader w-full my-16">
          <Image src={InsideShop} alt="Inside the shop " />
        </section>
        <p className="text-[14px] font-[600]">
          Retail Market Hours:
          <br />
          Thursday – Sun: 11:00AM - 7:00PM
        </p>
        <section className="img-loader w-full my-16">
          <Image
            src={EmployeeTalking}
            alt="Employee making makis and giving guidance to customers "
          />
        </section>
        <p className="text-[14px] font-[600]">
          Food Hall Hours:
          <br />
          Mon – Sun: 11:00AM - 8:00PM
        </p>
      </section>
      <section className="home-events mt-24 flex flex-col items-center ">
        <div className="home-events-header flex flex-col items-center text-center w-8/12">
          <p className="text-6xl mb-24">活動</p>
          <h1 className={`${ogg.className} text-[60px] mb-24`}>
            Market Events
          </h1>
          <p className="text-6xl mb-24">活動</p>
        </div>
        <div className={`${styles.eventItem} home-events-items py-24 flex flex-col text-center items-center w-8/12`}>
          <p>09/21</p>
          <p className="w-4/5 mt-4">Small Business Retail Pop Up Weekend!</p>
        </div>
        <div className={`${styles.eventItem1} home-events-items py-24 flex flex-col text-center items-center w-8/12`}>
          <p>02/07</p>
          <p className="w-4/5 mt-4">New Balance & PaperBoi Paris by Greenhouse @ Canal Street Market</p>
        </div>
        <div className={`${styles.eventItem1} home-events-items py-24 flex flex-col text-center items-center w-8/12`}>
          <p>12/11</p>
          <p className="w-4/5 mt-4">Hack City 12/11</p>
        </div>
        <Link href={"/community/event"} className="my-12 border border-black w-8/12 text-center
        p-4">See All</Link>
         <div
          className={`${styles.customDash} flex flex-col w-11/12 items-center mb-8`}
        >
          
          <p className="mb-8 mt-4 text-center">
           265 Canal St. New York, NY
          </p>
        </div>
      </section>
    </div>
  );
}
