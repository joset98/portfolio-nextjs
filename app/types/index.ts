export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
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
