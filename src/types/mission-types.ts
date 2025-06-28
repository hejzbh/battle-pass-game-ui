export interface Mission {
  id: string; // Unique mission ID
  title: string; // Mission title (example: "Lorem Ipsum...")
  description?: string; // Optional longer description
  progress: number; // Progress in percentage (0-100)
  timeLeftInSeconds?: number; // Optional countdown timer (example: "00:10")
  isCompleted: boolean; // Whether mission is completed
  rewardXp: number; // XP points given for this mission
}
