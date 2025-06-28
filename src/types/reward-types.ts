export interface RewardItem {
  id: string; // Unique reward ID
  xpThreshold: number; // XP level required to unlock this reward (e.g., 100XP, 200XP, etc.)
  name: string; // Name of the reward item
  imageUrl: string; // URL for reward image
  status: RewardStatus; // Current state of reward for the user (enum)
  tier: RewardTier; // Type of reward (enum)
}

export enum RewardStatus {
  LOCKED = "LOCKED",
  CLAIMABLE = "CLAIMABLE",
  CLAIMED = "CLAIMED",
}

export enum RewardTier {
  STANDARD = "STANDARD",
  PREMIUM = "PREMIUM",
}
