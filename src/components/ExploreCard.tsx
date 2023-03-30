import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

type cardProps = {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
};

export default function ExploreCard({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: cardProps) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <Image
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-lg"
        width={800}
        height={800}
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-2xl text-xl text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex flex-col bg-[rgba(0,0,0,0.5)] rounded-b-lg ">
          <h2 className="font-semibold text-3xl text-white  text-center">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
}
