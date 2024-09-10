import { Article as ArticleComponent } from "@/components/Article";
import { Layout } from "@/components/Layout";
import { Article } from "@/lib/types";
import { type PageProps } from "gatsby";
import * as React from "react";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://www.dtp-toolbox.com/api/articles");
        const articles: Article[] = ((await res.json())?.items || []).map(
          (rawArticle: Omit<Article, "imageHTML" | "shortHTML">) => {
            const el = document.createElement("descriptionHtml");
            el.innerHTML = rawArticle.description;
            const imageURLRootEl =
              el.getElementsByClassName("medium-feed-image")[0]; // <p><a><img src='imageURL' /></a></p>
            const imageURL = imageURLRootEl
              ?.getElementsByTagName("img")[0]
              ?.getAttribute("src");
            console.log("ts", rawArticle.publishedAt);
            const shortHTML = el.getElementsByClassName(
              "medium-feed-snippet"
            )[0]?.innerHTML;
            return {
              ...rawArticle,
              imageURL: imageURL || "",
              shortHTML: shortHTML || "",
            };
          }
        );
        setArticles(articles);
      } catch (error) {
        console.error("Error fetching articles", error);
      }
    }
    fetchData();
  }, [setArticles]);
  return (
    <Layout activePath={location.pathname}>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 container py-4 px-2 md:p-8">
        {articles.map((article) => (
          <ArticleComponent article={article} key={article.id} />
        ))}
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Articles - Nikos Oikonomou</title>;
