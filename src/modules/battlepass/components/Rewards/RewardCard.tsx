import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { RewardItem, RewardStatus } from "@/types/reward-types";
import lockImage from "@/assets/images/lock-icon.png";
import { useState } from "react";
import useAudioEffects from "../../hooks/use-audio-effects";
import claimSound from "@/assets/audio/claim-reward.mp3";

interface RewardCardProps {
  className?: string;
  item: RewardItem;
  status: RewardStatus;
  showXP?: boolean;
  onClaim?: () => void;
  color?: "#00B3FF" | "#2F00FF" | "#FF9D00" | "#FF0000";
}

const gradientClassName: Record<RewardCardProps["color"] | any, string> = {
  "#00B3FF":
    "linear-gradient(2deg,rgba(0, 179, 255, 0.15) 0%, rgba(0, 179, 255, 0.13) 17%, rgba(0, 179, 255, 0) 50%)",
  "#2F00FF":
    "linear-gradient(2deg,rgba(47, 0, 255, 0.15) 0%, rgba(47, 0, 255, 0.13) 17%, rgba(47, 0, 255, 0) 50%)",
  "#FF9D00":
    "linear-gradient(2deg,rgba(255, 157, 0, 0.15) 0%, rgba(255, 157, 0, 0.13) 17%, rgba(255, 157, 0, 0) 50%)",
  "#FF0000":
    "linear-gradient(2deg,rgba(255, 0, 0, 0.25) 0%, rgba(255, 0, 0, 0.13) 17%, rgba(255, 0, 0, 0) 50%)",
};

const RewardCard = ({
  className = "",
  item,
  showXP,
  status,
  onClaim,
  color,
}: RewardCardProps) => {
  const [isRotating, setIsRotating] = useState(false);

  const { playEffect } = useAudioEffects();

  const isClaimable = status === RewardStatus.CLAIMABLE;
  const isClaimed = status === RewardStatus.CLAIMED;
  const isLocked = status === RewardStatus.LOCKED;

  function startRotateAnimation() {
    playEffect(claimSound);

    setIsRotating(true);

    // Stop animation after it completes
    setTimeout(() => {
      setIsRotating(false);
    }, 2000);
  }

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
        className={`bg-white/10 border-[1px]  border-white/30 p-4 min-w-[230px] h-[285px] overflow-visible relative ${className}  ${
          isRotating ? "animate-spin-claim" : ""
        }`}
        style={{
          clipPath:
            "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 100%, 0% 20%)",
        }}
      >
        <Text
          size="xs"
          className="text-white min-h-[40px] uppercase font-bold text-center max-w-[80%] text-wrap mx-auto"
        >
          {item.name}
        </Text>

        <div className="mt-5 flex flex-col justify-start items-center  h-full">
          <img
            src={item.imageUrl}
            alt="Reward"
            width={150}
            height={150}
            className={`w-full h-full max-w-[150px] max-h-[150px] mx-auto `}
          />

          {(isClaimable || isClaimed) && (
            <Button
              onClick={() => {
                if (!isClaimable) return;

                if (onClaim) onClaim();

                startRotateAnimation();
              }}
              className="max-w-fit mx-auto"
              variant={isClaimable ? "primary" : "secondary"}
            >
              <Text size="xxs" className="text-white  uppercase !font-[400]">
                {isClaimable ? "Claim reward" : "Already claimed"}
              </Text>
            </Button>
          )}

          {isLocked && (
            <img
              src={lockImage}
              loading="eager"
              width={12}
              height={14}
              alt="Lock"
              className="mt-3"
            />
          )}
        </div>

        {color && (
          <div
            style={{
              backgroundImage: gradientClassName[color],
            }}
            className="absolute bottom-0 left-0 right-0 top-0 p-5  z-[-1]"
          >
            <div
              className="absolute bottom-[-1px] z-[1] left-[50%] translate-x-[-50%] w-[73px] h-[3px]"
              style={{ background: color }}
            ></div>
          </div>
        )}
      </div>
    </article>
  );
};

export default RewardCard;
