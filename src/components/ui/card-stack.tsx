"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96" onClick={handleCardClick}>
      {cards.map((card, index) => {
        const isCurrentCard = index === currentIndex;
        const cardIndex = (index - currentIndex + cards.length) % cards.length;

        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] cursor-pointer flex items-center justify-center"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: cardIndex * -CARD_OFFSET,
              scale: 1 - cardIndex * SCALE_FACTOR,
              zIndex: cards.length - cardIndex,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 text-center">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
