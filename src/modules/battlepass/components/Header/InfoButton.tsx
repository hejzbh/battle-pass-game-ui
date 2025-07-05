import Text from "@/components/ui/Text";
import React from "react";
import { useUI } from "@/components/UIContext";

const InfoButton: React.FC = () => {
  const { openFrame } = useUI();
  return (
    <div className="relative z-[1]">
      <div
        className="p-3  bg-[#2CBD5A]/20 min-w-[140px] min-h-[122px] relative z-[-1]"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 0, 99% 55%, 50% 100%, 50% 100%, 0 55%, 0 0)",
        }}
      >
        <button
          onClick={() => openFrame("quest")}
          title="More information"
          className="backdrop:blur-[5px] block bg-white/10 rounded-[16px] p-[6px] px-4 rotate-[-9deg] mt-3 transition-all duration-300 ease-in-out hover:bg-green-500"
        >
          <Text size="md" className="text-white !font-[900]">
            Information
          </Text>
        </button>
      </div>
      <div
        className="bg-[#2CBD5A]/20 p-1 min-h-[120px] min-w-[140px] absolute bottom-[-15px] left-0 right-0  z-[-1]"
        style={{
          clipPath:
            "polygon(0 51%, 50% 97%, 100% 51%, 100% 53%, 50% 100%, 50% 100%, 0 53%, 0 0)",
        }}
      ></div>
      <div
        className="bg-[#2CBD5A]/10 p-1 min-h-[120px] min-w-[140px] absolute bottom-[-32px] left-0 right-0  z-[-1]"
        style={{
          clipPath:
            "polygon(0 48%, 50% 92%, 100% 48%, 100% 56%, 50% 100%, 50% 100%, 0 56%, 0 0)",
        }}
      ></div>
    </div>
  );
};

export default InfoButton;
