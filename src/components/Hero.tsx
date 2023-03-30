"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { textVariant } from "../utils/motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section className=" ">
      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-[url('/coverright.jpg')] h-[40rem] bg-no-repeat bg-center flex justify-start items-end"
      >
        {/* <Image
          src="/cover.jpg"
          alt="cover"
          className="w-full object-cover z-0 absolute "
          width={1200}
          height={1200}
        /> */}
        <div className=" h-full flex flex-col w-1/3  justify-center items-center gap-10 text-center ml-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h2 className="text-4xl font-black text-white ">
            WELCOME TO SCROLL KINGDOMS
          </h2>

          <button className="font-black  text-white text-xl bg-gradient-to-tr from-emerald-500  hover:to-emerald-100 to-purple-500 w-fit px-6 py-4 borrder-white border-2">
            PLAY NOW
          </button>
        </div>
      </motion.div>
    </section>
  );
}
