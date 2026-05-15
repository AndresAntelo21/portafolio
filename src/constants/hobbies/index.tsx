import type { HobbyItem } from "@/constants/hobbies/hobby-types";
import { ageCalculatorAppHobby } from "@/constants/hobbies/projects/age-calculator-app";
import { urlShorteningApiLandingHobby } from "@/constants/hobbies/projects/url-shortening-api-landing";

export type { HobbyItem } from "@/constants/hobbies/hobby-types";

export const HOBBY_ITEMS: HobbyItem[] = [
  urlShorteningApiLandingHobby,
  ageCalculatorAppHobby,
];

export function getHobbyById(hobbyId: string | undefined) {
  return HOBBY_ITEMS.find((hobby) => hobby.id === hobbyId);
}
