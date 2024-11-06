import { Article as ArticleType } from "@/lib/types";
import * as React from "react";
import { Article } from "./Article";
import { FeaturedArticle } from "./FeatureArticle";

export const ArticleList: React.FC<{
  articles: ArticleType[];
  categories: string[];
  featuredArticle?: ArticleType;
}> = ({ articles, categories, featuredArticle }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      {featuredArticle && <FeaturedArticle article={featuredArticle} />}
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 container py-4 px-2 md:p-8">
        {filteredArticles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </section>
    </>
  );
};
