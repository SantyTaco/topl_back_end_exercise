import { Article, Articles } from "../model";

export function formatGNewsData(gNewsArticles : any[], max: string) {
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

    const articles = new Articles(parseInt(max), 0, articleList);
    return articles;
}