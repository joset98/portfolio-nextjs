import { Skills as SkillsType } from "@/app/types"

interface SkillsProps {
  skills: SkillsType | null;
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="relative z-10 py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-5xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills && Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="p-6 bg-card border border-pink-100 rounded-lg transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-primary">{category}</h3>
              <ul className="space-y-2">
                {skillList.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}