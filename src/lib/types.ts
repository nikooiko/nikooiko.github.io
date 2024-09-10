export type Article = {
  id: string;
  title: string;
  description: string; // this is the article's description as HTML
  imageURL: string; // extracted from description (class=medium-feed-image)
  shortHTML: string; // extracted from description (class=medium-feed-snippet)
  link: string;
  publishedAt: number; // ms
  categories: { name: string; link: string }[];
};
