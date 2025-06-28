import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { RewardItem, RewardStatus } from "@/types/reward-types";

interface RewardCardProps {
  className?: string;
  item: RewardItem;
  showXP?: boolean;
}

const RewardCard = ({ className = "", item, showXP }: RewardCardProps) => {
  return (
    <article className="relative">
      {showXP && (
        <Text
          className="font-[400] absolute text-white z-[10] top-[-10%] left-[50%] translate-x-[-50%]"
          size="xs"
        >
          {item.xpThreshold} XP
        </Text>
      )}
      <div
        className={`bg-white/10 border-[1px]  border-white/30 p-4 min-w-[230px] min-h-[280px] overflow-visible ${className}`}
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 100%, 0% 20%)",
        }}
      >
        <Text
          size="xs"
          className="text-white  uppercase font-bold text-center max-w-[80%] text-wrap mx-auto"
        >
          {item.name}
        </Text>

        <div className="mt-6 flex flex-col justify-center items-center">
          <img
            src={item.imageUrl}
            alt="Reward"
            width={150}
            height={150}
            className="w-full h-full max-w-[150px] max-h-[150px] mx-auto"
          />

          {(item.status === RewardStatus.CLAIMABLE ||
            item.status === RewardStatus.CLAIMED) && (
            <Button
              className="max-w-fit mx-auto"
              variant={
                item.status === RewardStatus.CLAIMABLE ? "primary" : "secondary"
              }
            >
              <Text size="xxs" className="text-white  uppercase !font-[400]">
                {item.status === RewardStatus.CLAIMABLE
                  ? "Claim reward"
                  : "Already claimed"}
              </Text>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default RewardCard;
