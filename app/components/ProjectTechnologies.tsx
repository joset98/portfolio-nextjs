import { skillIcons } from "@/components/ui/iconsMap";
import { Code } from "lucide-react";

interface ProjectTechnologiesProps {
  technologies: string[];
}

export function ProjectTechnologies({ technologies }: ProjectTechnologiesProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      {technologies.map((tech) => (
        <div key={tech} className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-lg">{skillIcons[tech as keyof typeof skillIcons] || <Code size={18} />}</span>
          <span>{tech}</span>
        </div>
      ))}
    </div>
  );
}