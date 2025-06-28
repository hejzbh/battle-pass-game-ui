import Text from "@/components/ui/Text";
import { useEffect } from "react";
import InfoButton from "./InfoButton";

interface HeaderActionsProps {
  className?: string;
  onESC?: () => void;
}

const HeaderActions = ({
  className = "",
  onESC = () => {},
}: HeaderActionsProps) => {
  function escape(e: KeyboardEvent) {
    if (e.key !== "Escape") return;

    onESC();
  }

  useEffect(() => {
    window.addEventListener("keydown", escape);

    return () => window.removeEventListener("keydown", escape);
  }, []); // eslint-disable-line

  return (
    <div
      className={`flex items-start space-x-[50px] 2xl:space-x-[130px] ${className}`}
    >
      {/** */}
      <InfoButton />

      {/** ESC */}
      <button
        title="Close"
        className="bg-white/10 rounded-[10px] p-4 py-2 hover:bg-red-500 transition mt-10"
        onClick={onESC}
      >
        <Text size="xs" className="uppercase text-white font-bold">
          ESC
        </Text>
      </button>
    </div>
  );
};

export default HeaderActions;
