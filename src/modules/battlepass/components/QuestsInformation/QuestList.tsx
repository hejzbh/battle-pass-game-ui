import questItems from "@/modules/battlepass/data/quest.json";
import QuestItem from "./QuestItem";
import { QuestType } from "@/types/quest-types";

interface Props {
  className?: string;
}

const QuestList = ({ className = "" }: Props) => {
  return (
    <div
      className={`grid grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-scroll scrollbar-hide ${className}`}
    >
      {(questItems as QuestType[])?.map((quest) => (
        <QuestItem quest={quest as QuestType} />
      ))}
    </div>
  );
};

export default QuestList;
