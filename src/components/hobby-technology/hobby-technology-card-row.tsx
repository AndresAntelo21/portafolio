import Tooltip from "@/components/ui/tooltip/tooltip";
import {
  getHobbyTechnologyStack,
  type HobbyTechnologyStackId,
} from "@/constants/hobby-technology-stacks";

type HobbyTechnologyCardRowProps = {
  stackId: HobbyTechnologyStackId;
};

export function HobbyTechnologyCardRow({ stackId }: HobbyTechnologyCardRowProps) {
  return (
    <>
      {getHobbyTechnologyStack(stackId).map((technology) => {
        const Icon = technology.cardIcon;

        return (
          <li key={technology.title}>
            <Tooltip content={technology.title}>
              <Icon aria-label={technology.title} />
            </Tooltip>
          </li>
        );
      })}
    </>
  );
}
