"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { textVariant } from "../utils/motion";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section className=" ">
      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-[url('/coverfull.png')] sm:bg-[url('/coverright.jpg')] object-right m-1 rounded-2xl h-[40rem] bg-no-repeat bg-center flex justify-start items-end"
      >
        {/* <Image
          src="/cover.jpg"
          alt="cover"
          className="w-full object-cover z-0 absolute "
          width={1200}
          height={1200}
        /> */}
        <div className=" h-full flex flex-col w-1/2 2xl:w-3/4  justify-center items-center gap-10 text-center ml-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-">
          <h2 className="text-4xl font-black text-white ">
            WELCOME TO SCROLL KINGDOMS
          </h2>

          <Link
            href={"https://app.scrollkingdoms.com/"}
            className="font-black  text-white text-xl bg-gradient-to-tr from-emerald-500  hover:to-emerald-100 to-purple-500 w-fit px-6 py-4 borrder-white border-2"
          >
            PLAY NOW
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
