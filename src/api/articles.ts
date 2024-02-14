import { Article } from "@/lib/types";
import { GatsbyFunctionResponse } from "gatsby";
import rssToJson from "rss-to-json";

export default async function articlesHandler(
  req: GatsbyFunctionResponse,
  res: GatsbyFunctionResponse
) {
  const items: Article[] = [];
  try {
    const data = await rssToJson("https://medium.com/feed/@nikoikonomou92");
    for (const item of data.items) {
      items.push({
        id: item.id,
        title: item.title,
        description: item.description,
        link: item.link,
        publishedAt:
          item.published || new Date("2024-02-14T16:53:58.905Z").getTime(),
        categories:
          item.category?.map((c: string) => ({
            name: c,
            link: `https://medium.com/tag/${c}`,
          })) || [],
      });
    }
  } catch (err) {
    console.error("Error fetching articles", err);
  }
  res.json({
    items,
  });
}
