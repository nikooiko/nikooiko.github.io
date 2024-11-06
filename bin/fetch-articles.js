"use strict";
const { parse: rssJsonParse } = require("rss-to-json");
const { parse: htmlParse } = require("node-html-parser");
const fs = require("fs");
const path = require("path");

function extractFromDescription(rawArticle) {
  let imageURL = "";
  let shortHTML = "";
  if (rawArticle.description) {
    try {
      const descriptionHTML = htmlParse(rawArticle.description);
      const imageURLRootEl =
        descriptionHTML.querySelector(".medium-feed-image"); // <p><a><img src='imageURL' /></a></p>
      imageURL = imageURLRootEl?.querySelector("img")?.getAttribute("src");
      shortHTML = descriptionHTML.querySelector(
        ".medium-feed-snippet"
      )?.innerHTML;
    } catch (err) {
      console.log("Error parsing description HTML", err);
    }
  }
  return {
    ...rawArticle,
    imageURL: imageURL || "",
    shortHTML: shortHTML || "",
  };
}

async function fetchArticles() {
  const items = [];
  try {
    const data = await rssJsonParse("https://medium.com/feed/@nikoikonomou92");
    for (const item of data.items) {
      items.push({
        id: item.id,
        title: item.title,
        description: item.description,
        link: item.link,
        publishedAt:
          item.published || new Date("2024-02-14T16:53:58.905Z").getTime(),
        categories:
          item.category?.map((c) => ({
            name: c,
            link: `https://medium.com/tag/${c}`,
          })) || [],
      });
    }
  } catch (err) {
    console.error("Error fetching articles", err);
    process.exit(1);
  }
  console.log("fetched articles", JSON.stringify(items, null, 2));
  return items.map((item) => extractFromDescription(item));
}

if (require.main === module) {
  fetchArticles().then((articles) => {
    fs.writeFileSync(
      path.resolve(__dirname, "../src/data/articles.json"),
      JSON.stringify(articles, null, 2)
    );
    console.log("Done fetching articles");
    process.exit(0);
  });
}
