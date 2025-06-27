import Text from "@/components/ui/Text";

interface CurrentSeasonProps {
  className?: string;
  season: number;
}

const CurrentSeason = ({ className = "", season }: CurrentSeasonProps) => {
  return (
    <div
      className={`rhombus min-w-[70px] min-h-[70px] bg-white/10 px-8 py-6 flex flex-col items-center justify-center text-center ${className}`}
    >
      <Text size="xl" className="leading-[30px]">
        {season}
      </Text>
      <Text size="xxs" className="uppercase text-white/70 font-bold">
        Season
      </Text>
    </div>
  );
};

export default CurrentSeason;
