import BattlePass from "@/modules/battlepass/index";
import useAudioEffects from "./modules/battlepass/hooks/use-audio-effects";
import openBpassAudio from "@/assets/audio/open-bpass.mp3";
import { useUI } from "./components/UIContext";
import QuestInformation from "./modules/battlepass/components/QuestsInformation/QuestInformation";

export default function App() {
  const { uiState, openFrame, closeFrame } = useUI();
  const { playEffect } = useAudioEffects();

  return (
    <div className="relative">
      {uiState.battlePass && (
        <BattlePass
          variant="standard"
          onClose={() => closeFrame("battlePass")}
        />
      )}

      {uiState.quest && (
        <QuestInformation onClose={() => closeFrame("quest")} />
      )}

      {!uiState.battlePass && (
        <button
          onClick={() => {
            openFrame("battlePass");
          }}
          className="fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-green-700 font-bold text-[30px] !text-white p-4"
        >
          Open Battlepass
        </button>
      )}

      {!uiState.quest && (
        <button
          onClick={() => openFrame("quest")}
          className="fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-blue-700 font-bold text-[30px] !text-white p-4"
        >
          Open Quest Frame
        </button>
      )}
    </div>
  );
}
