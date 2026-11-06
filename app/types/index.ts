export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  galleryImages?: string[];
  metrics?: { value: string; label: string }[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  highlight: { value: string; dir: "up" | "down"; label: string };
  description: string[];
  technologies: string[];
};

export type Skills = {
  [category: string]: string[];
};
