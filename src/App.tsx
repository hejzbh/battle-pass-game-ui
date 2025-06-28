import BattlePass from "@/modules/battlepass/index";
import { useState } from "react";
import useAudioEffects from "./modules/battlepass/hooks/use-audio-effects";
import openBpassAudio from "@/assets/audio/open-bpass.mp3";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const { playEffect } = useAudioEffects();

  return (
    <div className="relative">
      {open ? (
        <BattlePass variant="standard" onClose={() => setOpen(false)} />
      ) : (
        <button
          onClick={() => {
            playEffect(openBpassAudio, { volume: 0.08 });
            setOpen(true);
          }}
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] bg-green-700 font-bold text-[30px] !text-white p-4"
        >
          Click to open b-pass
        </button>
      )}
    </div>
  );
}

export default App;
