import React, { useEffect, useState } from "react";
import Text from "@/components/ui/Text";

type LevelProgressBarProps = {
  className?: string;
  currentXP: number;
  maxXP: number;
};

const LevelProgressBar: React.FC<LevelProgressBarProps> = ({
  currentXP,
  maxXP,
  className = "",
}) => {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const percentage = Math.min((currentXP / maxXP) * 100, 100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 50); // short delay for smoother animation

    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="flex justify-between text-xs text-white/60 mb-1 px-1">
        <Text size="xxs" className="text-white/50">
          {currentXP} XP
        </Text>
        <Text size="xxs" className="text-white/50">
          {maxXP} XP
        </Text>
      </div>
      <div className="w-full h-2 bg-black/30 border-[0.5px] border-[#313e37] overflow-hidden">
        <div
          className="h-full bg-level-bar-gradient transition-all duration-700 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
};

export default LevelProgressBar;
