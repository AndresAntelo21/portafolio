import Tooltip from "@/components/ui/tooltip/tooltip";
import {
  getProjectTechnologyStack,
  type ProjectTechnologyStackId,
} from "@/constants/project-technology-stacks";

const VISIBLE_TECHNOLOGY_LIMIT = 7;

type RelatedProjectTechnologyRowProps = {
  stackId: ProjectTechnologyStackId;
};

export function RelatedProjectTechnologyRow({
  stackId,
}: RelatedProjectTechnologyRowProps) {
  const technologies = getProjectTechnologyStack(stackId);
  const visibleTechnologies = technologies.slice(0, VISIBLE_TECHNOLOGY_LIMIT);
  const hiddenTechnologies = technologies.slice(VISIBLE_TECHNOLOGY_LIMIT);
  const hiddenCount = hiddenTechnologies.length;
  const hiddenTechnologiesLabel = hiddenTechnologies
    .map((technology) => technology.title)
    .join(", ");

  return (
    <>
      {visibleTechnologies.map((technology) => {
        const Icon = technology.cardIcon;

        return (
          <li key={technology.title} className="shrink-0">
            <Tooltip content={technology.title}>
              <Icon aria-label={technology.title} />
            </Tooltip>
          </li>
        );
      })}
      {hiddenCount > 0 ? (
        <li className="shrink-0">
          <Tooltip content={hiddenTechnologiesLabel}>
            <span
              tabIndex={0}
              className="font-poppins inline-flex cursor-default text-sm font-semibold text-white/70"
              aria-label={`${hiddenCount} more technologies: ${hiddenTechnologiesLabel}`}
            >
              +{hiddenCount}
            </span>
          </Tooltip>
        </li>
      ) : null}
    </>
  );
}
