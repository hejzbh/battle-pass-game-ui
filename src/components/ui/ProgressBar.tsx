import { useEffect, useState } from "react";
import Text, { TextProps } from "./Text";

interface ProgressBarProps {
  className?: string;
  value: number;
  maxValue: number;
  labelAtStart?: TextProps;
  labelAtEnd?: TextProps;
  gradientLine?: boolean;
}
const ProgressBar = ({
  className,
  value,
  maxValue,
  labelAtEnd,
  gradientLine,
  labelAtStart,
}: ProgressBarProps) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 50); // short delay for smoother animation

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs text-white/60 mb-1 px-1">
        {labelAtStart ? <Text {...labelAtStart} /> : <span></span>}
        {labelAtEnd ? <Text {...labelAtEnd} /> : <span></span>}
      </div>
      <div
        className={`w-full h-2  overflow-hidden ${
          gradientLine
            ? "bg-black/30 border-[#313e37] border-[0.5px]"
            : "bg-white/10"
        }`}
      >
        <div
          className={`h-full ${
            gradientLine ? "bg-level-bar-gradient" : "bg-white"
          } transition-all duration-700 ease-out`}
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
