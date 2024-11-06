import { Article } from "@/lib/types";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { ChevronRight } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";

export const FeaturedArticle: React.FC<{ article: Article }> = ({
  article,
}) => {
  // TODO: maybe add image placeholder?
  return (
    <section className="sm:mb-8 container px-4 hidden md:block">
      <article className="my-4 sm:m-8 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
            {article.title}
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 mb-4 text-justify"
            dangerouslySetInnerHTML={{ __html: article.shortHTML }}
          />
          <Button size="lg" asChild>
            <a href={article.link} target="_blank">
              Read full article
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
        {article.image ? (
          <GatsbyImage
            image={article.image}
            alt="Featured Article Image"
            objectFit="cover"
            className="w-full h-full order-first sm:order-last"
          />
        ) : (
          <StaticImage
            src="../../images/article-placeholder.svg"
            alt={"Featured Article Image"}
            objectFit="cover"
            className="w-full h-full order-first sm:order-last"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        )}
      </article>
    </section>
  );
};
