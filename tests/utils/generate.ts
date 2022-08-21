import { Article, Articles } from "../../source/model";
import { formatGNewsData } from "../../source/utils/articles_utils";

export function generateArticles() {
  const articles = formatGNewsData(gNewsArticlesData.articles, "3");

  return articles;
}

export const gNewsArticlesData = {
  articles: [
    {
      title:
        "Ecuador onderschept megahoeveelheid coke bestemd voor haven Rotterdam",
      description:
        "De 3500 kilo cocaïne zat verstopt in twee containers met bananen.",
      content:
        "EPA\nNOS Nieuws • vandaag, 03:15 Ecuador onderschept megahoeveelheid coke bestemd voor haven Rotterdam\nIn Ecuador is een enorme hoeveelheid cocaïne onderschept, waarvan een deel als bestemming de haven in Rotterdam had. In totaal 3500 kilo cocaïne zat... [622 chars]",
      url: "https://nos.nl/artikel/2441472-ecuador-onderschept-megahoeveelheid-coke-bestemd-voor-haven-rotterdam",
      image: "https://cdn.nos.nl/image/2022/08/21/889772/1200x675.jpg",
      publishedAt: "2022-08-21T01:15:30Z",
      source: {
        name: "NOS",
        url: "https://nos.nl",
      },
    },
  ],
};
