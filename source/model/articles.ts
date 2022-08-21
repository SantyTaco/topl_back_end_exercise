import { Article } from "./article";

export class Articles {
    constructor(
        public totalArticles: number,
        public wordFrequency: any,
        public articles: Article[],
        public searchIn: string,
    ) {
        this.totalArticles = totalArticles;
        this.wordFrequency = wordFrequency;
        this.articles = articles;
        this.searchIn = searchIn;
    }
}