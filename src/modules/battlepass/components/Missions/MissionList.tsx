import MissionItem from "./MissionItem";

import missionItems from "@/modules/battlepass/data/missions.json";

const MissionList = () => {
  return (
    <ul className="space-y-3">
      {missionItems?.map((mission) => (
        <li key={mission?.id}>
          <MissionItem mission={mission} />
        </li>
      ))}
    </ul>
  );
};

export default MissionList;
