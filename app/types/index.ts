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
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
};

export type Skills = {
  [category: string]: string[];
};
