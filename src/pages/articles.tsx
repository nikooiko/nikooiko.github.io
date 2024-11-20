import { ArticleList } from "@/components/articles/ArticleList";
import { Layout } from "@/components/Layout";
import { Article } from "@/lib/types";
import { graphql, type PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";

const ArticlesPage: React.FC<
  PageProps<{ allArticlesJson: { nodes: Article[] } }>
> = ({ location, data }) => {
  const articles = data.allArticlesJson.nodes.map((article) => {
    const image = getImage(article.remoteImage ?? null);
    return {
      ...article,
      image: image,
    };
  });
  const articleCategories = articles.reduce((acc, article) => {
    article.categories.forEach((category) => {
      if (!acc.includes(category.name)) {
        acc.push(category.name);
      }
    });
    return acc;
  }, [] as string[]);
  const nestjsCompleteGuide = articles.find((article: Article) =>
    article.title.includes("NestJS - A Complete Guide")
  );
  return (
    <Layout activePath={location.pathname}>
      <ArticleList
        articles={articles}
        featuredArticle={nestjsCompleteGuide}
        categories={articleCategories}
      />
    </Layout>
  );
};

export default ArticlesPage;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Articles by Nikos Oikonomou</title>
    <meta
      name="description"
      content="Articles written by Nikos Oikonomou. Provides the descriptions, images and the links of available articles. Mostly about backend using NodeJS/NestJS and web development in general"
    />
  </>
);

// GraphQL query to fetch data and remote images
export const query = graphql`
  query {
    allArticlesJson {
      nodes {
        id
        title
        description
        shortHTML
        link
        publishedAt
        categories {
          name
          link
        }
        imageURL
        remoteImage {
          childImageSharp {
            gatsbyImageData(width: 600, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
