export type HobbyProjectLevel =
  | "newbie"
  | "junior"
  | "intermediate"
  | "advanced"
  | "guru";

export const HOBBY_LEVEL_META: Record<
  HobbyProjectLevel,
  { label: string; color: string }
> = {
  newbie: { label: "Newbie", color: "#06b6d4" },
  junior: { label: "Junior", color: "#34d399" },
  intermediate: { label: "Intermediate", color: "#fbbf24" },
  advanced: { label: "Advanced", color: "#f97316" },
  guru: { label: "Guru", color: "#e11d48" },
};
