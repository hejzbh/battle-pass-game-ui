import Text from "@/components/ui/Text";
import { RewardItem, RewardTier } from "@/types/reward-types";

import rewardsData from "@/modules/battlepass/data/rewards.json";
import RewardCard from "./RewardCard";

interface RewardRowProps {
  className?: string;
  tier: RewardTier;
}

const RewardRow = ({ className = "", tier }: RewardRowProps) => {
  return (
    <div className={`relative ${className}`}>
      <Text
        size="lg"
        className="text-white rotate-[-90deg] absolute top-[50%] translate-y-[-50%] left-[-2.5%] min-w-[105px]"
      >
        {tier?.toString()?.toUpperCase()}
      </Text>

      {/** List */}
      <ul className="flex items-center space-x-7 pl-14">
        {(rewardsData[tier] as RewardItem[])?.map((reward: RewardItem) => (
          <li key={reward.id}>
            <RewardCard item={reward} showXP={tier !== RewardTier.PREMIUM} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardRow;
