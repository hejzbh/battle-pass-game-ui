import React, { useState } from "react";
import Text from "./Text";
import missionsImage from "@/assets/images/missions-icon.png";
import useAudioEffects from "@/modules/battlepass/hooks/use-audio-effects";

import changingTabAudio from "@/assets/audio/changing-tab.mp3";

type TabItem = {
  label: string;
  component: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  ExtraComponent?: React.ReactElement;
  ExtraComponentVisibleOnlyAt?: "all" | number;
  className?: string;
  tabActiveClassName?: string;
  tabButtonClassName?: string;
  activeTabButtonClassName?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  className = "",
  tabActiveClassName,
  ExtraComponent,
  ExtraComponentVisibleOnlyAt = "all",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { playEffect } = useAudioEffects();

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Tabs Header */}
      <div className="flex space-x-6 flex-wrap">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              title="Click to pen tab"
              onClick={() => {
                playEffect(changingTabAudio, { volume: 0.1 });
                setActiveIndex(index);
              }}
              className={`text-white flex items-center pb-1 space-x-4  ${
                isActive
                  ? "opacity-100 border-b-[1.6px] border-white"
                  : "opacity-50"
              }`}
            >
              <img
                loading="lazy"
                alt="Icon"
                src={missionsImage}
                width={16}
                height={20}
              />
              <Text size="md" className="!font-[500]">
                {tab.label}
              </Text>
            </button>
          );
        })}
      </div>

      {ExtraComponent && ExtraComponentVisibleOnlyAt === "all"
        ? ExtraComponent
        : ExtraComponentVisibleOnlyAt === activeIndex && ExtraComponent}

      {/* Active Tab Content */}
      <div
        className={`mt-5 h-full overflow-y-scroll scrollbar-hide pb-[500px] ${tabActiveClassName}`}
      >
        {tabs[activeIndex]?.component}
      </div>
    </div>
  );
};

export default Tabs;
