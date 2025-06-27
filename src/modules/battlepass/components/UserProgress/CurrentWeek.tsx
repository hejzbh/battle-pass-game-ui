import Text from "@/components/ui/Text";

interface CurrentWeekProps {
  className?: string;
  week: number;
  maxWeek?: number;
}

const CurrentWeek = ({
  className = "",
  week,
  maxWeek = 10,
}: CurrentWeekProps) => {
  return (
    <div
      className={`rhombus min-w-[220px] min-h-[220px] flex flex-col items-center justify-center p-5 bg-white-fade-right ${className}`}
    >
      <Text size="2xl" className="text-white/80 leading-[110%]">
        <span className="text-white">7</span>/10
      </Text>
      <Text size="xxs" className="uppercase text-white/50 font-[600]">
        Week
      </Text>
    </div>
  );
};

export default CurrentWeek;
