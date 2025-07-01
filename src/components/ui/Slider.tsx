import React, { useRef } from "react";
import nextIcon from "@/assets/images/next-icon.png";
import backIcon from "@/assets/images/back-icon.webp";
import ScrollContainer from "react-indiana-drag-scroll";

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

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      // Only if vertical scroll
      if (e.deltaY !== 0) {
        e.preventDefault();
        containerRef.current.scrollBy({
          left: e.deltaY * 4.2,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Strelice */}
      <div className="flex justify-end mb-2 space-x-2 pr-10">
        <button
          title="Back"
          onClick={scrollLeft}
          className="transition bg-white/5 p-3 px-4 hover:opacity-70 border-0 outline-0"
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
          className="transition bg-white/5 p-3 px-4 hover:opacity-70 border-0 outline-0"
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

      {/* Wrap ScrollContainer in a <div> with onWheel */}
      <div onWheel={handleWheel}>
        <ScrollContainer
          innerRef={containerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide whitespace-nowrap rounded p-2"
          vertical={false}
        >
          {children}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Slider;
