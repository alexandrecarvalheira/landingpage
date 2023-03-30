"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { staggerContainer, textVariant2 } from "@/utils/motion";
import ExploreCard from "./ExploreCard";

export const exploreWorlds = [
  {
    id: "craft",
    imgUrl: "/craft.png",
    title: "Craft",
  },
  {
    id: "arena",
    imgUrl: "/arena.png",
    title: "Arena",
  },

  {
    id: "quest",
    imgUrl: "/quest.png",
    title: "Quest",
  },
  {
    id: "training",
    imgUrl: "/train.png",
    title: "Training",
  },
];

export default function Explore() {
  const [active, setActive] = useState("arena");
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <motion.h2
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="mt-2 font-bold md:text-4xl text-2xl text-white text-center"
        >
          Explore the Realm
        </motion.h2>
        <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
