import type { ReactNode } from "react";
import { SiGithub } from "react-icons/si";
import type { ProjectDetailLinkItem } from "@/components/project-detail/project-detail-layout";
import type { HobbyTechnologyStackId } from "@/constants/hobby-technology-stacks";
import type { HobbyProjectLevel } from "@/constants/hobby-project-level";
const URL_SHORTENING_COVER =
  "/hobbies-projects/frontend-mentor/url-shortening.png";

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

export const HOBBY_ITEMS: HobbyItem[] = [
  {
    id: "url-shortening-api-landing",
    title: "URL shortening API landing page",
    category: "Frontend Mentor",
    level: "intermediate",
    cardDescription:
      "Integrate the Clean URI API to shorten links, persist history, copy with one click, and match the challenge designs with a responsive, accessible UI.",
    detailDescription: (
      <>
        <p>
          Your challenge is to integrate with the <strong>Clean URI API</strong>{" "}
          to create shortened URLs and display them like in the designs.
        </p>
        <p>
          You can use any JavaScript framework or library on the front-end such
          as <strong>React</strong> or <strong>Vue</strong>. You also have
          complete control over which packages you use for HTTP requests or
          styling.
        </p>
        <p>
          Download the starter code and read the <strong>README.md</strong> for
          project details. The <strong>style-guide.md</strong> file documents
          colors, fonts, and visual tokens.
        </p>
        <p>
          Want support on the challenge? Join the Frontend Mentor community and
          ask questions in the help channel.
        </p>
      </>
    ),
    features: [
      "Shorten any valid URL.",
      "See a list of shortened links, even after refreshing the browser.",
      "Copy the shortened link to the clipboard in a single click.",
      "Receive an error message when the form is submitted if the input field is empty.",
      "View the optimal layout for the interface depending on the device screen size.",
      "See hover and focus states for all interactive elements on the page.",
    ],
    coverSrc: URL_SHORTENING_COVER,
    coverAlt: "URL shortening API landing page preview",
    technologyStackId: "url-shortening-api-landing",
    period: "May 14 - Present",
    links: [
      {
        href: "https://www.figma.com/",
        label: "Figma",
        iconSrc: "/tools/figma.svg",
      },
      {
        href: "https://github.com/your-username/url-shortening-api-landing-page",
        label: "GitHub",
        icon: <SiGithub />,
      },
      {
        href: "https://your-deploy-url.example.com",
        label: "Visit site",
      },
    ],
  },
];

export function getHobbyById(hobbyId: string | undefined) {
  return HOBBY_ITEMS.find((hobby) => hobby.id === hobbyId);
}
