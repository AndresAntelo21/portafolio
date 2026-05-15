import { SiGithub } from "react-icons/si";
import type { HobbyItem } from "@/constants/hobbies/hobby-types";

const COVER_SRC = "/hobbies-projects/frontend-mentor/age-calculator.png";

export const ageCalculatorAppHobby: HobbyItem = {
  id: "age-calculator-app",
  title: "Age calculator app",
  category: "Frontend Mentor",
  level: "junior",
  cardDescription:
    "Build an age calculator from the Frontend Mentor design: validate day, month, and year, handle edge cases, and show years, months, and days in a responsive, accessible layout.",
  detailDescription: (
    <>
      <p>
        Your challenge is to build out this age calculator app and get it looking
        as close to the design as possible.
      </p>
      <p>
        You can use any tools you like to help you complete the challenge. If you
        have something you would like to practice, feel free to give it a go.
      </p>
      <p>
        Download the project and read the <strong>README.md</strong> file for more
        details about the challenge and how to get set up.
      </p>
    </>
  ),
  features: [
    "View an age in years, months, and days after submitting a valid date through the form.",
    "Receive validation errors if any field is empty when the form is submitted.",
    "Receive validation errors if the day number is not between 1 and 31.",
    "Receive validation errors if the month number is not between 1 and 12.",
    "Receive validation errors if the date is in the future.",
    "Receive validation errors if the date is invalid (for example 31/04/1991 when April has 30 days).",
    "View the optimal layout for the interface depending on the device screen size.",
    "See hover and focus states for all interactive elements on the page.",
    "Bonus: see the age numbers animate to their final value when the form is submitted.",
  ],
  coverSrc: COVER_SRC,
  coverAlt: "Age calculator app preview",
  technologyStackId: "age-calculator-app",
  period: "May 14 - Present",
  links: [
    {
      href: "https://www.figma.com/",
      label: "Figma",
      iconSrc: "/tools/figma.svg",
    },
    {
      href: "https://github.com/your-username/age-calculator-app",
      label: "GitHub",
      icon: <SiGithub />,
    },
    {
      href: "https://your-deploy-url.example.com",
      label: "Visit site",
    },
  ],
};
