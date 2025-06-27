import React, { useState } from "react";
import Text from "./Text";
import missionsImage from "@/assets/images/missions-icon.png";

type TabItem = {
  label: string;
  component: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  className?: string;
  tabButtonClassName?: string;
  activeTabButtonClassName?: string;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  className = "",
  tabButtonClassName = "",
  activeTabButtonClassName = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      {/* Tabs Header */}
      <div className="flex space-x-6 flex-wrap">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              title="Click to pen tab"
              onClick={() => setActiveIndex(index)}
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

      {/* Active Tab Content */}
      <div>{tabs[activeIndex]?.component}</div>
    </div>
  );
};

export default Tabs;
