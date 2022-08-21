import ArticlesController from "./articles";
import { createResponse } from 'node-mocks-http';
import { generateArticles } from "../../tests/utils/generate";

describe("Articles Controller", () => {
  describe("get articles by keyword", () => {
    it('should return status 400 when the max parameter is a string', () => {
        const response = createResponse();
        const controller = new ArticlesController();
        
        const resStatus = controller.validateMaxNumber(response, 'text');

        expect(resStatus?.statusCode).toEqual(400);
    }),
    it('should return status 400 when the max parameter is 0', () => {
        const response = createResponse();
        const controller = new ArticlesController();
        
        const resStatus = controller.validateMaxNumber(response, '0');

        expect(resStatus?.statusCode).toEqual(400);
    }),
    it('should return status undefined when the max parameter correct', () => {
        const response = createResponse();
        const controller = new ArticlesController();
        
        const resStatus = controller.validateMaxNumber(response, '2');

        expect(resStatus?.statusCode).toEqual(undefined);
    })
    it('should return status 200 when the search is success', () => {
        const response = createResponse();
        const controller = new ArticlesController();
        const articles = generateArticles();
        
        const resStatus = controller.sendSuccessResult(response, articles);

        expect(resStatus?.statusCode).toEqual(200);
    })
  })
});
