export type Article = {
  id: string;
  title: string;
  description: string;
  link: string;
  publishedAt: number; // ms
  categories: { name: string; link: string }[];
};
