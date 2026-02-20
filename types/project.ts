export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  skills?: string[];
  code?: string;
}