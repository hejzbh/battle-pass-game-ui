import Text from "@/components/ui/Text";
import { Mission } from "@/types/mission-types";
import { useFavorites } from "../../hooks/use-favorites";
import starFillImage from "@/assets/images/start-fill.webp";
import starEmptyImage from "@/assets/images/star-empty.webp";
import checkFillImage from "@/assets/images/check-mark-fill.webp";
import checkEmptyImage from "@/assets/images/check-mark-empty.webp";
import ProgressBar from "@/components/ui/ProgressBar";
import CountdownTimer from "@/components/ui/Countdown";

interface MissionItemProps {
  className?: string;
  mission: Mission;
}

const MissionItem = ({ className = "", mission }: MissionItemProps) => {
  const { checkIsFavorite, removeFavorite, addFavorite } = useFavorites();

  const isFavorited = checkIsFavorite(mission.id);

  return (
    <div className={`relative p-3 pb-4  ${className}`}>
      <div className="gradient-border-left"></div>
      <div className="gradient-border-bottom "></div>
      <div className="gradient-border-top"></div>

      {/** Content */}
      <main className="min-h-[120px] flex flex-col justify-between w-full">
        <div className="flex items-center space-x-6 justify-between">
          <Text size="sm" className="text-white/60 !font-[400] max-w-[84%]">
            {mission?.description}
          </Text>

          <div className="flex items-center space-x-2 ">
            {/** Favorite */}
            <button
              title={isFavorited ? "Remove from favorites" : "Add to favorites"}
              onClick={() =>
                isFavorited
                  ? removeFavorite(mission.id)
                  : addFavorite(mission.id)
              }
            >
              <img
                loading="lazy"
                alt="Star"
                width={20}
                height={20}
                className="min-w-[20px] min-h-[20px]"
                src={isFavorited ? starFillImage : starEmptyImage}
              />
            </button>
            {/** Completed */}
            {mission?.timeLeftInSeconds ? (
              <CountdownTimer
                valueInSeconds={mission.timeLeftInSeconds}
                onDone={() => {
                  console.log(`mission with id: ${mission.id} is completed`);
                }}
              />
            ) : (
              <img
                loading="lazy"
                alt="Star"
                width={mission.isCompleted ? 36 : 24}
                height={mission.isCompleted ? 36 : 24}
                src={mission.isCompleted ? checkFillImage : checkEmptyImage}
              />
            )}
          </div>
        </div>

        {/** Progress bar */}
        {!mission.isCompleted && (
          <ProgressBar
            className="w-full"
            value={mission.progress}
            maxValue={100}
            labelAtEnd={{
              size: "xs",
              className: "text-white font-[600]",
              children: mission.progress + " %",
            }}
          />
        )}
      </main>
    </div>
  );
};

export default MissionItem;
