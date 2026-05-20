import type { ReactNode } from "react";
import type { ProjectDetailLinkItem } from "@/components/project-detail/project-detail-layout";
import type { HobbyTechnologyStackId } from "@/constants/hobby-technology-stacks";
import type { HobbyProjectLevel } from "@/constants/hobby-project-level";

export type HobbyItem = {
  id: HobbyTechnologyStackId;
  title: string;
  category: string;
  level: HobbyProjectLevel;
  cardDescription: string;
  detailDescription: string | ReactNode;
  features: string[];
  coverSrc: string;
  coverAlt: string;
  technologyStackId: HobbyTechnologyStackId;
  period: string;
  links?: ProjectDetailLinkItem[];
};
