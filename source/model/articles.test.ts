import { Articles } from "./articles";

describe("Test Article class", () => {
  it("should create an article object", () => {
    const articles = new Articles(5, 6, []);

    expect(articles.totalArticles).toEqual(5);
    expect(articles.wordFrequency).toEqual(6);
    expect(articles.articles.length).toEqual(0);
  });
});