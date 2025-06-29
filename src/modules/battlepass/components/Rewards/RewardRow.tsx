import Text from "@/components/ui/Text";
import { RewardItem, RewardStatus, RewardTier } from "@/types/reward-types";

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
        className="text-white rotate-[-90deg] absolute top-[50%] translate-y-[-50%] left-[-3.5%] 1920px:left-[-2.5%] 2560px:left-[-1.8%] min-w-[105px]"
      >
        {tier?.toString()?.toUpperCase()}
      </Text>

      {/** List */}
      <ul className="flex items-center space-x-7 pl-14">
        {(rewardsData[tier] as RewardItem[])?.map(
          (reward: RewardItem, i: number) => (
            <li key={reward.id}>
              <RewardCard
                onClaim={() => {
                  console.log("Claimed");
                }}
                item={reward}
                showXP={tier !== RewardTier.PREMIUM}
                status={
                  i === 0
                    ? RewardStatus.CLAIMED
                    : i === 1
                    ? RewardStatus.CLAIMABLE
                    : RewardStatus.LOCKED
                }
                color={i === 0 ? "#00B3FF" : i === 1 ? "#2F00FF" : "#FF0000"}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RewardRow;
