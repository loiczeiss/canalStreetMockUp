import styles from "./styles.module.css";
import { ogg } from "@/app/layout";
export default function FooterComp() {
  return (
    <>
      <section className="flex flex-col items-center">
        <span className={`${styles.footerActionCall} h-2 w-11/12 `}></span>
        <h4 className={ogg.className}>Interested in becoming a vendor?</h4>
        <span className={`${styles.footerActionCall} h-2 w-11/12 `}></span>
      </section>
    </>
  );
}
