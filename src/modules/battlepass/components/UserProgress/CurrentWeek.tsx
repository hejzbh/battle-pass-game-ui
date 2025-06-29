import Button from "@/components/ui/Button";
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
    <div className="relative">
      <div
        className={`rhombus relative min-w-[220px] min-h-[220px] flex flex-col items-center justify-center p-5 bg-white-fade-right ${className}`}
      >
        <Text size="2xl" className="text-white/80 leading-[110%]">
          <span className="text-white">7</span>/10
        </Text>
        <Text size="xxs" className="uppercase text-white/50 font-[600]">
          Week
        </Text>
      </div>

      <Button
        className="!max-w-[150px] bottom-[-27px] absolute left-[50%] mainBreakPoint:left-[62%] translate-x-[-50%]"
        variant="primary"
      >
        <Text size="xxs" className="uppercase text-white !font-[500]">
          Upgrade b-pass
        </Text>
      </Button>
    </div>
  );
};

export default CurrentWeek;
