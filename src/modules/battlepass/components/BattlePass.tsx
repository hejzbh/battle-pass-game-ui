import ImageGradient from "@/components/ui/ImageGradient";
import bpassBackgroundImage from "@/assets/images/bpass-background.webp";
import Header from "./Header/Header";
import Tabs from "@/components/ui/Tabs";
import MissionList from "./Missions/MissionList";
import FavoriteList from "./Favorites/FavoriteList";
import RewardTrack from "./Rewards";
import WeeksPagination from "./Missions/WeeksPagination";
import { useUserProgress } from "../hooks/use-user-progress";

interface BattlePassProps {
  variant: "standard" | "premium";
  className?: string;
  onClose: () => void;
}

const BattlePass = ({
  className = "",
  variant = "standard",
  onClose,
}: BattlePassProps) => {
  const { week } = useUserProgress();
  return (
    <section className={`w-full h-screen fixed top-0 left-0 ${className}`}>
      <ImageGradient imageSrc={bpassBackgroundImage} />
      <Header onClose={onClose} />
      <div className="grid grid-cols-[30%,68%] 1520px:grid-cols-[25%,73%] 2560px:grid-cols-[28%,70%]  justify-between gap-10 mt-[40px] pl-10 h-full">
        <Tabs
          tabs={[
            { label: "Missions", component: <MissionList /> },
            { label: "Favorites", component: <FavoriteList /> },
          ]}
          ExtraComponent={
            <WeeksPagination currentWeek={week} className="mt-5" />
          }
          ExtraComponentVisibleOnlyAt={0}
        />
        <RewardTrack />
      </div>
    </section>
  );
};

export default BattlePass;
