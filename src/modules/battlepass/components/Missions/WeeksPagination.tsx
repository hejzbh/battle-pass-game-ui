import Text from "@/components/ui/Text";
import React from "react";

interface WeeksPaginationProps {
  className?: string;
  currentWeek: number; // Active week (e.g., 2 for week 2)
  totalWeeks?: number; // Total number of weeks (default 10)
  unlockedWeeks?: number; // Up to which week is unlocked
  onWeekClick?: (week: number) => void; // Callback when user clicks a week
}

const WeeksPagination: React.FC<WeeksPaginationProps> = ({
  currentWeek,
  totalWeeks = 10,
  unlockedWeeks = totalWeeks,
  className = "",
  onWeekClick,
}) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {Array.from({ length: totalWeeks }, (_, index) => {
        const week = index + 1;
        const isActive = week === currentWeek;
        const isUnlocked = week <= currentWeek;

        return (
          <button
            key={week}
            title={`Week: ${week}`}
            onClick={() => isUnlocked && onWeekClick?.(week)}
            className={`
              min-w-[35px] h-[35px]  flex items-center justify-center relative 
              
              ${isActive ? "bg-white text-black" : "bg-white/15 text-white"}
              ${
                !isUnlocked
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-white/10"
              }
        
            `}
          >
            <Text size="sm"> {week}</Text>

            <div
              style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0)" }}
              className={`absolute top-0 left-0 w-[14px] h-[14px]  ${
                week === 1 ? "bg-[#2CBD5A]" : "bg-black/10"
              }`}
            ></div>
          </button>
        );
      })}
    </div>
  );
};

export default WeeksPagination;
