"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
      >
        <h2 className=" font-extrabold text-[24px] leading-[30px] text-white">
          Scroll Kingdoms
        </h2>
        <ul className="flex gap-8 justify-between text-white items-center">
          <li>FAQ</li>
          <li>
            <button className=" bg-gradient-to-tr from-emerald-500 to-purple-500  hover:to-emerald-100 hover:font-bold px-4 py-2 rounded-md flex items-center gap-2">
              Game Dashboard{" "}
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTY2NjMgNy4wMDAzM0gxMi44MzMzTTEyLjgzMzMgNy4wMDAzM0w2Ljk5OTk2IDEuMTY2OTlNMTIuODMzMyA3LjAwMDMzTDYuOTk5OTYgMTIuODMzNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" />
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
