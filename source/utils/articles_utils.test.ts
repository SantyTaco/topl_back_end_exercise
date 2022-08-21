import { gNewsArticlesData } from "../../tests/utils/generate";
import { formatGNewsData } from "./articles_utils";

describe("Test Article utils", () => {
    describe("Format GNews data", () => {
        it("should return a Articles", () => {
            const gNewsArticles = gNewsArticlesData;
            const formatData = formatGNewsData(gNewsArticles.articles, '3');
            console.log('format', formatData);
        
            expect(formatData.totalArticles).toEqual(3);
            expect(formatData.wordFrequency).toEqual(0);
            expect(formatData.articles.length).toEqual(1);
          });
    });
  
});