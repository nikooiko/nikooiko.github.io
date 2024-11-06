import { Article as ArticleType } from "@/lib/types";
import { formatDate } from "date-fns";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Placeholder from "../../images/article-placeholder.svg";
import { badgeVariants } from "../ui/badge";

const ArticleCategories: React.FC<{ article: ArticleType }> = ({ article }) => {
  if (!article.categories.length) {
    return null;
  }
  return (
    <div className="flex gap-1 mt-2 flex-wrap">
      {article.categories.map((category) => (
        <p
          key={category.name}
          className={`${badgeVariants({
            variant: "outline",
          })} hover:bg-secondary hover:text-secondary-foreground shrink-0`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(category.link, "_blank");
          }}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

const ArticleCard: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <article
      className="group rounded-lg bg-card shadow-sm dark:shadow-lg transition-all hover:shadow-2xl"
      id={article.id}
    >
      <a href={article.link} className="block" target="_blank">
        <div className="h-48 md:h-60 overflow-hidden rounded-t-lg">
          {article.image ? (
            <GatsbyImage
              image={article.image}
              alt="Article Image"
              objectFit="cover"
              className="h-full w-full object-cover transition-all group-hover:scale-105 aspect-[600/400]"
            />
          ) : (
            <img
              src={article.imageURL || Placeholder}
              alt="Article image"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-all group-hover:scale-105 aspect-[600/400]"
            />
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold tracking-tight">{article.title}</h2>
          <time className="mt-2 text-sm font-normal text-stone-500 dark:text-stone-300">
            {formatDate(article.publishedAt, "dd MMM. yyyy")}
          </time>
          <ArticleCategories article={article} />
          <div className="mt-2 line-clamp-3 text-stone-600 dark:text-stone-300">
            <p dangerouslySetInnerHTML={{ __html: article.shortHTML }} />
          </div>
        </div>
      </a>
    </article>
  );
};

export const Article: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <>
      <ArticleCard article={article} />
    </>
  );
};
