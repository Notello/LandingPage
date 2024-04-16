"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { BsFiletypeDocx, BsFiletypeJpg, BsFiletypePpt, BsFiletypePdf } from "react-icons/bs";

const fileIcons = [
  { icon: BsFiletypeDocx, className: "text-slate-500 w-48 h-48 hover:text-black transition duration-300 ease-out m-10" },
  { icon: BsFiletypeJpg, className: "text-slate-500 w-48 h-48 hover:text-black transition duration-300 ease-out m-10" },
  { icon: BsFiletypePpt, className: "text-slate-500 w-48 h-48 hover:text-black transition duration-300 ease-out m-10" },
  { icon: BsFiletypePdf, className: "text-slate-500 w-48 h-48 hover:text-black transition duration-300 ease-out m-10" },
];

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      }
    }
  };
 return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-64 sm:max-w-sm overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {fileIcons.map((fileIcon, idx) => {
          const Icon = fileIcon.icon;
          return (
            <li
              key={idx}
              className="w-48 h-48 flex justify-center items-center bg-gradient-to-b from-slate-400 to-slate-300 rounded-lg shadow-md"
            >
              <Icon className={fileIcon.className} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};