import { Skills as SkillsType } from "@/app/types"
import { skillIcons } from "@/components/ui/iconsMap";
import { Code } from "lucide-react";

interface SkillsProps {
  skills: SkillsType | null;
}

// Sub-componente para un solo skill, mejora la legibilidad y el mantenimiento.
function SkillItem({ name }: { name: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-primary text-xl w-5 flex-shrink-0 flex items-center justify-center">
        {skillIcons[name as keyof typeof skillIcons] || <Code size={18} />}
      </span>
      <span className="text-muted-foreground">{name}</span>
    </li>
  );
}

// Sub-componente para una categoría de skills.
function SkillCategory({ category, skills }: { category: string, skills: string[] }) {
  return (
    <div className="p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <SkillItem key={skill} name={skill} />
        ))}
      </ul>
    </div>
  );
}

export function SkillsSection({ skills }: SkillsProps) {
  if (!skills) {
    return null;
  }

  return (
    <section id="skills" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl">
          Habilidades y Herramientas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory key={category} category={category} skills={skillList} />
          ))}
        </div>
      </div>
    </section>
  )
}