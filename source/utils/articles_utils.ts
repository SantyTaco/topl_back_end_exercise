import { Article, Articles } from "../model";

export function formatGNewsData(gNewsArticles : any[], max: string, searchIn: string) {
    const articleList = gNewsArticles?.map((article: any) => {
        return new Article(
            article.title,
            article.description,
            article.content,
            article.url,
            article.image,
            article.publishAt,
            article.source.name
        );
    });

    const articles = new Articles(parseInt(max), 0, articleList, searchIn);
    return articles;
}

export const getWordFrequencyInContent = (articles: Articles) => {
    const wordFrequency: any = {};
    articles?.articles?.map((article) => {
      const words = article.content.split(/['-_",.`~?!&*$%@\s()]/);
      words?.map((word) => {
        if (word) {
          wordFrequency[word] ? wordFrequency[word] = wordFrequency[word] + 1 : wordFrequency[word] = 1;
        }
      });
    });
    return wordFrequency;
  }