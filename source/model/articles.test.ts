import { Articles } from "./articles";

describe("Test Article class", () => {
  it("should create an article object", () => {
    const articles = new Articles(5, {}, [], 'title');

    expect(articles.totalArticles).toEqual(5);
    expect(articles.wordFrequency).toEqual({});
    expect(articles.articles.length).toEqual(0);
    expect(articles.searchIn).toEqual('title');
  });
});