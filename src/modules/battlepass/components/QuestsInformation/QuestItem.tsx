import Text from "@/components/ui/Text";
import { QuestType } from "@/types/quest-types";

interface Props {
  className?: string;
  quest: QuestType;
}

const QuestItem = ({ className = "", quest }: Props) => {
  return (
    <article className={`relative bg-white-fade-right ${className}`}>
      <div className="gradient-border-left"></div>
      <div className="gradient-border-bottom "></div>
      <div className="gradient-border-top"></div>

      <div className="p-4 py-5 flex items-center space-x-2">
        <img
          src={quest.imageUrl}
          alt="Quest"
          loading="eager"
          width={70}
          height={70}
        />

        <div>
          <Text size="lg" className="text-white uppercase font-bold">
            {quest.title}
          </Text>
          {quest.description && (
            <Text size="xs" className="text-white/80">
              {quest.description}
            </Text>
          )}
        </div>
      </div>

      <Text size="xxs" className="absolute bottom-2 right-2 text-white">
        {quest.xp} XP
      </Text>
    </article>
  );
};

export default QuestItem;
