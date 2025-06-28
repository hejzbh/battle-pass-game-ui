import React from "react";
import ProgressBar from "@/components/ui/ProgressBar";

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
  return (
    <div className={`w-full max-w-md ${className}`}>
      <ProgressBar
        value={currentXP}
        maxValue={maxXP}
        labelAtStart={{
          size: "xxs",
          className: "text-white/50",
          children: currentXP + " XP",
        }}
        labelAtEnd={{
          size: "xxs",
          className: "text-white/50",
          children: maxXP + " XP",
        }}
        gradientLine
      />
    </div>
  );
};

export default LevelProgressBar;
