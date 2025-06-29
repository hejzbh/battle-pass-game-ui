import Text from "@/components/ui/Text";
import UserProgress from "../UserProgress/UserProgress";
import HeaderActions from "./HeaderActions";

interface HeaderProps {
  className?: string;
  onClose: () => void;
}

const Header = ({ className = "", onClose }: HeaderProps) => {
  return (
    <header
      className={` text-white flex items-start justify-between px-10 ${className}`}
    >
      {/** Logo & Next week info */}
      <div>
        <Text size="3xl">B-Pass</Text>
        <div className="ml-[-7px] mt-2">
          <Text
            size="xl"
            className="tracking-[0.7em]  uppercase bg-white/10 max-w-fit leading-[30px] p-[10px] px-[12px] pr-0"
          >
            Brotherhood
          </Text>
          <div className="bg-white/10 max-w-fit p-[10px] flex items-center space-x-3   px-[12px] triangle-down">
            <Text size="xs" className="font-semibold  text-white/50 ">
              next week in
            </Text>
            <Text
              className="bg-white/5 py-[3px] p-[5px] uppercase rounded-sm"
              size="md"
            >
              05D 03H 01S
            </Text>
          </div>
        </div>
      </div>

      {/** User Progress */}
      <UserProgress className="relative ml-[-100px] 1520px:ml-[-150px] flex-[1]" />

      {/** Other (information , esc & more) */}
      <HeaderActions onESC={onClose} />
    </header>
  );
};

export default Header;
