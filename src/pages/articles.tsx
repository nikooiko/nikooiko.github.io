import { Article as ArticleComponent } from "@/components/Article";
import { Layout } from "@/components/Layout";
import articlesData from "@/data/articles.json";
import { Article } from "@/lib/types";
import { type PageProps } from "gatsby";
import * as React from "react";

const articles = (
  articlesData.data as Omit<Article, "imageHTML" | "shortHTML">[]
).map((rawArticle) => {
  const el = document.createElement("descriptionHtml");
  el.innerHTML = rawArticle.description;
  const imageURLRootEl = el.getElementsByClassName("medium-feed-image")[0]; // <p><a><img src='imageURL' /></a></p>
  const imageURL = imageURLRootEl
    ?.getElementsByTagName("img")[0]
    ?.getAttribute("src");
  const shortHTML = el.getElementsByClassName("medium-feed-snippet")[0]
    ?.innerHTML;
  return {
    ...rawArticle,
    imageURL: imageURL || "",
    shortHTML: shortHTML || "",
  };
});

const IndexPage: React.FC<PageProps> = ({ location }) => {
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

export const Head = () => (
  <>
    <html lang="en" />
    <title>Articles - Nikos Oikonomou</title>
    <meta
      name="description"
      content="Articles written by Nikos Oikonomou. Provides the descriptions, images and the links of available articles. Mostly about backend using NodeJS/NestJS and web development in general"
    />
  </>
);
