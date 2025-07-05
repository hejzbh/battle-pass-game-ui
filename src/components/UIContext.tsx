import { createContext, useContext, useState, ReactNode } from "react";
import useAudioEffects from "@/modules/battlepass/hooks/use-audio-effects";
import openBpassAudio from "@/assets/audio/open-bpass.mp3";
type UIState = {
  battlePass: boolean;
  quest: boolean; // <-- your actual other frame
};

type UIContextType = {
  uiState: UIState;
  openFrame: (frame: keyof UIState) => void;
  closeFrame: (frame: keyof UIState) => void;
  toggleFrame: (frame: keyof UIState) => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [uiState, setUIState] = useState<UIState>({
    battlePass: false,
    quest: false,
  });
  const { playEffect } = useAudioEffects();

  const openFrame = (frame: keyof UIState) => {
    setUIState((prev) => ({ ...prev, [frame]: true }));
    playEffect(openBpassAudio, { volume: 0.08 });
  };

  const closeFrame = (frame: keyof UIState) =>
    setUIState((prev) => ({ ...prev, [frame]: false }));

  const toggleFrame = (frame: keyof UIState) =>
    setUIState((prev) => ({ ...prev, [frame]: !prev[frame] }));

  return (
    <UIContext.Provider
      value={{
        uiState,
        openFrame,
        closeFrame,
        toggleFrame,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
