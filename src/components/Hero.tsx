"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="sm:py-8 ">
      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-red-400 opacity-90 h-fit"
      >
        <Image
          src="/cover.jpg"
          alt="cover"
          className="w-full object-cover z-0 absolute "
          width={1200}
          height={1200}
        />
        <div className="relative flex flex-col ">
          <h2>WELCOME TO AURORY</h2>
          <h3>
            Easy to play . Hard to master. Insanely addictive. Immerse yourself
            in this rewarding, tactics-based, collectible creature battler game.
            PL
          </h3>
        </div>
      </motion.div>
    </section>
  );
}
