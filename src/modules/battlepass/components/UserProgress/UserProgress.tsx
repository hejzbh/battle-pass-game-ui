import { useUserProgress } from "../../hooks/use-user-progress";
import CurrentLevel from "./CurrentLevel";
import CurrentSeason from "./CurrentSeason";
import CurrentWeek from "./CurrentWeek";

interface UserProgressProps {
  className?: string;
}

const UserProgress = ({ className = "" }: UserProgressProps) => {
  const { season, xp, level, week } = useUserProgress();
  return (
    <div className={`flex items-start ${className}`}>
      {/** Season */}
      <CurrentSeason season={season} className="mt-[10px]" />

      {/** Week */}
      <CurrentWeek
        week={week}
        className="!mt-[-75px] pt-[55px] ml-[-5px] relative"
      />

      {/** Level */}
      <CurrentLevel
        className="ml-[85px]"
        rhombusElementClassName="mt-[-45px] pt-[40px]"
        level={level}
        currentXP={xp}
      />
    </div>
  );
};

export default UserProgress;
