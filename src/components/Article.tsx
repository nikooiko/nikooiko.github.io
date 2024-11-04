import { Article as ArticleType } from "@/lib/types";
import { formatDate } from "date-fns";
import * as React from "react";
import Placeholder from "../images/article-placeholder.svg";
import { badgeVariants } from "./ui/badge";

export const Article: React.FC<{ article: ArticleType }> = ({ article }) => {
  return (
    <article
      className="group rounded-lg bg-card shadow-sm dark:shadow-lg transition-all hover:shadow-2xl"
      id={article.id}
    >
      <a href={article.link} className="block" target="_blank">
        <div className="h-48 overflow-hidden rounded-t-lg">
          <img
            src={article.imageURL || Placeholder}
            alt="Article image"
            width={600}
            height={400}
            className="h-full w-full object-cover transition-all group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold tracking-tight">{article.title}</h2>
          <p className="mt-2 text-sm font-normal text-stone-400 dark:text-stone-500">
            {formatDate(article.publishedAt, "dd MMM. yyyy")}
          </p>
          {article.categories.length && (
            <div className="flex flex-wrap gap-1 mt-2">
              {article.categories.map((category) => (
                <p
                  key={category.name}
                  className={`${badgeVariants({
                    variant: "outline",
                  })} hover:bg-secondary hover:text-secondary-foreground`}
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
          )}
          <div className="mt-2 line-clamp-3 text-muted-foreground">
            <p dangerouslySetInnerHTML={{ __html: article.shortHTML }} />
          </div>
        </div>
      </a>
    </article>
  );
};
