import { generateArticles, gNewsArticlesData } from "../../tests/utils/generate";
import { formatGNewsData, getWordFrequencyInContent } from "./articles_utils";

describe("Test Article utils", () => {
    describe("Format GNews data", () => {
        it("should return a Articles", () => {
            const gNewsArticles = gNewsArticlesData;
            const formatData = formatGNewsData(gNewsArticles.articles, '3');
        
            expect(formatData.totalArticles).toEqual(3);
            expect(formatData.articles.length).toEqual(1);
          });
    });
    describe("Get word frquency data", () => {
        it("should return an object", () => {
            const articles = generateArticles();
            const wordFrequency = getWordFrequencyInContent(articles);
            console.log('wordFrequency', wordFrequency);

            expect(wordFrequency.vandaag).toEqual(1);
            expect(wordFrequency.cuador).toEqual(2);
          });
    });
  
});