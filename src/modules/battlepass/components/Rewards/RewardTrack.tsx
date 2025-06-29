import Slider from "@/components/ui/Slider";
import RewardRow from "./RewardRow";
import { RewardTier } from "@/types/reward-types";

interface RewardTrackProps {
  className?: string;
}

const RewardTrack = ({ className = "" }: RewardTrackProps) => {
  return (
    <div className={`${className} pb-10`}>
      <Slider>
        <div className="space-y-6 1366px:space-y-14 pt-7">
          <RewardRow tier={RewardTier.STANDARD} />
          <RewardRow tier={RewardTier.PREMIUM} />
        </div>
      </Slider>
    </div>
  );
};

export default RewardTrack;
