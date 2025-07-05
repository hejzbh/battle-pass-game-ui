import { useUserProgress } from "../../hooks/use-user-progress";
import CurrentLevel from "./CurrentLevel";
import CurrentSeason from "./CurrentSeason";
import CurrentWeek from "./CurrentWeek";

interface UserProgressProps {
  className?: string;
  showWeek?: boolean;
  showSeason?: boolean;
  showLevel?: boolean;
}

const UserProgress = ({
  className = "",
  showLevel,
  showSeason,
  showWeek,
}: UserProgressProps) => {
  const { season, xp, level, week } = useUserProgress();
  return (
    <div className={`flex items-start ${className}`}>
      {/** Season */}
      {showSeason && <CurrentSeason season={season} className="mt-[10px]" />}

      {/** Week */}
      {showWeek && (
        <CurrentWeek
          week={week}
          className="mt-[-92px] 1920px:!mt-[-75px] pt-[55px] ml-[-5px] relative"
        />
      )}

      {/** Level */}
      {showLevel && (
        <CurrentLevel
          className={`${
            showWeek ? "ml-[85px]" : "ml-[40%] translate-x-[-50%]"
          }`}
          rhombusElementClassName="mt-[-45px] pt-[40px]"
          level={level}
          currentXP={xp}
        />
      )}
    </div>
  );
};

export default UserProgress;
