"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-4`}
      >
        <h2 className=" font-extrabold text-3xl leading-[30px] text-white">
          Scroll Kingdoms
        </h2>
        <ul className="flex gap-4 justify-between text-white items-center">
          <li className="hover:font-bold">
            <Link
              href={"https://scroll-kingdoms-1.gitbook.io/game-play/game-play"}
            >
              Docs
            </Link>
          </li>
          <li className="hover:font-bold">
            <Link target="_blank" href={"https://v1.scrollkingdoms.com/"}>
              V1
            </Link>
          </li>
          <li>
            <Link
              href={"https://app.scrollkingdoms.com/"}
              className=" bg-gradient-to-tr from-emerald-500 to-purple-500  hover:to-emerald-100 hover:font-bold px-6 py-2 rounded-md flex items-center gap-2"
            >
              Game Dashboard{" "}
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTY2NjMgNy4wMDAzM0gxMi44MzMzTTEyLjgzMzMgNy4wMDAzM0w2Ljk5OTk2IDEuMTY2OTlNMTIuODMzMyA3LjAwMDMzTDYuOTk5OTYgMTIuODMzNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
