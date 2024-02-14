import { Layout } from "@/components/Layout";
import { badgeVariants } from "@/components/ui/badge";
import { Article } from "@/lib/types";
import { formatDate } from "date-fns";
import { type PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.dtp-toolbox.com/api/articles");
        const articles: Article[] = (await res.json())?.items || [];
        setArticles(articles);
      } catch (error) {
        console.error("Error fetching articles", error);
      }
    }
    fetchData();
  }, [setArticles]);
  return (
    <Layout activePath={location.pathname}>
      <section className="flex flex-col gap-8 p-4 sm:p-2">
        {articles.map((article) => (
          <div key={article.id}>
            <h2 className="font-semibold text-lg">
              <a
                href={article.link}
                className="hover:underline"
                target="_blank"
              >
                {article.title}
              </a>
            </h2>
            <time className="text-sm font-normal text-gray-400 dark:text-gray-500">
              {formatDate(article.publishedAt, "dd MMM. yyyy")}
            </time>
            <p
              className="mt-2"
              dangerouslySetInnerHTML={{ __html: article.description }}
            ></p>
            <div className="flex flex-wrap gap-2 mt-2">
              {article.categories.map((category) => (
                <a
                  href={category.link}
                  className={badgeVariants({ variant: "secondary" })}
                  target="_blank"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Articles - Nikos Oikonomou</title>;
