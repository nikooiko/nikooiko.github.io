const { parse } = require("rss-to-json");
const fs = require("fs");
const path = require("path");

async function fetchArticles() {
  const items = [];
  try {
    const data = await parse("https://medium.com/feed/@nikoikonomou92");
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
  return items;
}

if (require.main === module) {
  fetchArticles().then((articles) => {
    fs.writeFileSync(
      path.resolve(__dirname, "../src/data/articles.json"),
      JSON.stringify(
        {
          data: articles,
        },
        null,
        2
      )
    );
    console.log("Done fetching articles");
    process.exit(0);
  });
}
