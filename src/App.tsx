import BattlePass from "@/modules/battlepass/index";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {open ? (
        <BattlePass variant="standard" onClose={() => setOpen(false)} />
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] bg-green-700 font-bold text-[30px] !text-white p-4"
        >
          Click to open b-pass
        </button>
      )}
    </div>
  );
}

export default App;
