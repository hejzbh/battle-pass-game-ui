import React, { useRef } from "react";
import nextIcon from "@/assets/images/next-icon.png";
import backIcon from "@/assets/images/back-icon.webp";

interface SliderProps {
  className?: string;
  children: React.ReactNode;
  scrollAmount?: number; // koliko px da se scrolla jednom klikom
}

const Slider: React.FC<SliderProps> = ({
  children,
  scrollAmount = 300,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Strelice na desnoj strani iznad contenta */}
      <div className="flex justify-end mb-2 space-x-2 pr-10">
        <button
          title="Back"
          onClick={scrollLeft}
          className="transition bg-white/5 p-3 px-4 hover:opacity-70"
          aria-label="Scroll Left"
        >
          <img
            loading="eager"
            alt="Back"
            width={13}
            height={9}
            src={backIcon}
          />
        </button>
        <button
          title="Next"
          onClick={scrollRight}
          className="transition bg-white/5 p-3 px-4 hover:opacity-70"
          aria-label="Scroll Right"
        >
          <img
            loading="eager"
            alt="Next"
            width={13}
            height={9}
            src={nextIcon}
          />
        </button>
      </div>

      {/* Horizontalni scroll container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth  rounded p-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
