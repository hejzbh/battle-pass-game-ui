import Text from "@/components/ui/Text";
import badgeImage from "@/assets/images/default-badge.webp";
import topReflectionImage from "@/assets/images/top-reflection.webp";
import LevelProgressBar from "./LevelProgressBar";

interface CurrentLevelProps {
  className?: string;
  rhombusElementClassName?: string;
  level: number;
  currentXP: number;
  maxXP?: number;
}

const CurrentLevel = ({
  className = "",
  rhombusElementClassName = "",
  level,
  currentXP,
  maxXP = 700,
}: CurrentLevelProps) => {
  return (
    <div className={`flex items-center relative space-x-4 group ${className}`}>
      {/** Rhombus element, current level */}
      <div className="relative">
        <div
          className={`rhombus min-w-[170px] min-h-[150px] flex flex-col items-center justify-center p-8  bg-white-fade-right ${rhombusElementClassName}`}
        >
          <Text size="2xl" className="text-white leading-[110%]">
            {level?.toString()?.padStart(2, "0")}
          </Text>
          <Text size="xxs" className="uppercase text-white/50 font-[600]">
            lvl
          </Text>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-[-50%] translate-y-[-50%] ">
          <div className="animate-once-spin">
            <img
              src={badgeImage}
              alt="Badge"
              loading="lazy"
              width={55}
              height={55}
              className=" group-hover:animate-once-spin"
            />
          </div>
        </div>
      </div>

      {/** More info about level */}
      <div className="max-w-[260px] mainBreakPoint:max-w-[340px] p-3">
        <Text size="sm" className="text-white uppercase font-[500]">
          Your level
        </Text>
        <Text size="xs" className="text-white/50">
          Increase level by completing the mission or buy using the "Buy Level"
          button
        </Text>
        <LevelProgressBar
          currentXP={currentXP}
          maxXP={maxXP}
          className="mt-3"
        />
      </div>

      <img
        src={topReflectionImage}
        alt="Top reflection"
        loading="eager"
        width={300}
        height={250}
        className="absolute top-0 w-full h-full min-w-[120%] min-h-[190px] left-0 z-[-1]"
      />
    </div>
  );
};

export default CurrentLevel;
