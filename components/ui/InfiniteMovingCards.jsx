"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isRepeating, setIsRepeating] = useState(true);

  useEffect(() => {
    setLoopNum(Math.floor(Math.random() * items.length));
  }, [items]);

  const speedMap = {
    slow: 50,
    normal: 100,
    fast: 150,
  };

  const wrapperStyles = {
    display: "flex",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
  };

  const innerStyles = {
    display: "flex",
    flexWrap: "nowrap",
    whiteSpace: "nowrap",
    width: "fit-content",
  };

  return (
    <div style={wrapperStyles}>
      <motion.div
        style={innerStyles}
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: items.length * (speedMap[speed] / 10),
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] mx-2"
          >
            <p className="text-slate-100 text-sm sm:text-base">{item.quote}</p>
            <p className="mt-6 text-slate-200 font-medium">{item.name}</p>
            <p className="text-slate-400 text-sm">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};