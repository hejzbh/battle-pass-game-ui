import Text from "@/components/ui/Text";

interface HeaderActionsProps {
  className?: string;
  onESC?: () => void;
}

const HeaderActions = ({
  className = "",
  onESC = () => {},
}: HeaderActionsProps) => {
  return (
    <div className={`${className}`}>
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
