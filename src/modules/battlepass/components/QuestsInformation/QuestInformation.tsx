import ImageGradient from "@/components/ui/ImageGradient";
import questBackgroundImage from "@/assets/images/quest-bg.webp";
import Header from "@/modules/battlepass/components/Header/Header";
import Text from "@/components/ui/Text";
import QuestList from "./QuestList";
import xCircle from "@/assets/images/x-circle.png";
import { useUI } from "@/components/UIContext";

interface Props {
  className?: string;
  onClose: () => void;
}

const QuestInformation = ({ className = "", onClose = () => {} }: Props) => {
  const { closeFrame } = useUI();

  return (
    <section className={`w-full h-screen fixed top-0 left-0 z-10 ${className}`}>
      <ImageGradient imageSrc={questBackgroundImage} />
      <Header
        options={{ showSeason: true, showLevel: true }}
        onClose={onClose}
      />
      <div className="w-full h-full p-14 px-[7rem]">
        <div className="w-full h-full relative">
          <div className="gradient-border-left"></div>
          <div className="gradient-border-right "></div>
          <div className="gradient-border-top-full"></div>

          {/** Main */}
          <main className="p-10 px-8 bg-white-fade-right h-full">
            {/** Title */}
            <div className="flex items-center justify-between">
              <Text size="2xl" className="text-white !font-bold">
                Quest Information
              </Text>

              <button
                onClick={() => closeFrame("quest")}
                title="Close quest frame"
                className="p-3 bg-white/5 hover:bg-red-500/20 transition"
              >
                <img
                  src={xCircle}
                  loading="eager"
                  alt="X"
                  width={30}
                  height={30}
                />
              </button>
            </div>

            {/** List */}
            <QuestList className="mt-10" />
          </main>
        </div>
      </div>
    </section>
  );
};

export default QuestInformation;
