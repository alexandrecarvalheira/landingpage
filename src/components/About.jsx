"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant2,
  textVariant,
} from "@/utils/motion";

export default function About() {
  return (
    <section className="relative z-10 p-10 sm:p-32 xs:p-8 ">
      <motion.div className=" z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <motion.p
          variants={textContainer}
          className="text-sm text-secondary-white text-center"
        >
          {Array.from("|About Omni Kingdoms").map((text, index) => (
            <motion.span variants={textVariant2} key={index}>
              {text}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          className="mt-10 font-normal sm:text-2xl text-xl text-center text-secondary-white"
        >
          Omni Kingdoms is the ultimate Layer2 multichain RPG game that will
          take you on an epic adventure through a mystical world filled with
          dangerous creatures, ancient relics, and treacherous dungeons. As you
          play, you'll level up your hero, gaining new skills, weapons, and
          spells to help you on your quest. But the journey won't be easy, as
          you'll face fierce opponents in the Arena, fighting for a place at the
          top of the leaderboard. So what are you waiting for? Dive into the
          world of Omni Kingdoms today and become a legend!
        </motion.p>
      </motion.div>
    </section>
  );
}
