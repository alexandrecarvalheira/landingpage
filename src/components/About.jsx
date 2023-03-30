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
      <motion.div className="gradient-02 z-0" />
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
          {Array.from("|About Scroll Kingdom").map((text, index) => (
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
          Scroll Kingdoms is a cross chain free to play MMORPG. Users can
          customize their characters by changing their unique name, equipping
          items and switching between skins. They can also earn in game
          resources by questing, as well as boosting their stats via training
        </motion.p>
      </motion.div>
    </section>
  );
}
