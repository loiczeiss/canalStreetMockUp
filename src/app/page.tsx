import Image from "next/image";
import { ogg } from "./layout";


export default function Home() {
  return (
    <div className="flex flex-col items-center pt-[300px]">
      <section className="w-11/12">
        <h1 className={`${ogg.className} font-light text-4xl`}>
          Canal Street Market is<br/> a carefully curated<br/> retail market, food hall<br/> and
          community space open year-round at<br/> 265 Canal Street. Support Small
          Business this weekend.
        </h1>
      </section>
    </div>
  );
}
