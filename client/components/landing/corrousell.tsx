import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  position?: "top-left" | "top-right" | "center" | "bottom-left" | "bottom-right" | "bottom-center";
  decoImage?: string;
}

interface CarousellProps {
  items: CarouselItem[];
  autoplayInterval?: number;
}

const Carrousell: React.FC<CarousellProps> = ({
  items,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayInterval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  if (items.length === 0) return null;

  const positionClasses = {
    "top-left": "top-5 left-5 text-left",
    "top-right": "top-5 right-5 text-right",
    "center": "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
    "bottom-left": "bottom-5 left-5 text-left",
    "bottom-right": "bottom-5 right-5 text-right",
    "bottom-center": "bottom-5 left-1/2 transform -translate-x-1/2 text-center",
  }[items[currentIndex].position || "bottom-center"];

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${items[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Text Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`absolute ${positionClasses} p-4 md:p-6 rounded-xl shadow-lg max-w-md`}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-amber-100 mb-2">
              {items[currentIndex].title}
            </h1>
            <p className="text-md md:text-lg text-amber-50">
              {items[currentIndex].description}
            </p>
            {items[currentIndex].decoImage && (
              <img
                src={items[currentIndex].decoImage}
                alt="Decorative"
                className="absolute -top-8 -left-8 w-16 h-16 md:w-24 md:h-24"
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <button
        aria-label="Previous slide"
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 text-amber-800 p-3 rounded-full hover:scale-110 hover:bg-white transition-all duration-300"
        onClick={goToPrevious}
      >
        &#8249;
      </button>
      <button
        aria-label="Next slide"
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 text-amber-800 p-3 rounded-full hover:scale-110 hover:bg-white transition-all duration-300"
        onClick={goToNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carrousell;
