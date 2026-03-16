import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { Margarine } from "next/font/google";

export default function Home() {
  return (
      <main>
          <Banner/>
      </main>
  );
}
