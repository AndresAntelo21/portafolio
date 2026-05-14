import Tooltip from "@/components/ui/tooltip/tooltip";
import {
  getProjectTechnologyStack,
  type ProjectTechnologyStackId,
} from "@/constants/project-technology-stacks";

type ProjectTechnologyCardRowProps = {
  stackId: ProjectTechnologyStackId;
};

export function ProjectTechnologyCardRow({
  stackId,
}: ProjectTechnologyCardRowProps) {
  return (
    <>
      {getProjectTechnologyStack(stackId).map((technology) => {
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
