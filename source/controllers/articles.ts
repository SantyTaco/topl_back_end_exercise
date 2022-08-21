import { Request, Response, NextFunction } from "express";
import { getGNewsByKeyWord } from "../data_sources/gnews_data_source";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";
import { Articles } from "../model";
import { getWordFrequencyInContent } from "../utils/articles_utils";

const cache = new CacheContainer(new MemoryStorage());

const MAX_IS_NOT_NUMBER_MESSAGE = "max parameter is not a number";
const MAX_IS_ZERO_MESSAGE = "max parameter is zero";
const KEYWORD_IS_REQUIRED_MESSAGE = "the key keyword is required";
const SEARCH_IN_IS_NOT_BOOLEAN_MESSAGE = "inTitle allows true or false value";
export default class ArticlesController {
  getNewsByKeyWord = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      let articles: Articles | undefined;
      const keyword = req.query?.keyword || "";
      const max = req.query?.max || "100";
      const inTitle = req.query?.inTitle || false;

      this.validateInTitle(res, inTitle as string);
      const searchIn = req.query?.inTitle === 'true' ? "title" : "title,description";
      
      this.validateMaxNumber(res, max as string);
      articles = await cache.getItem<Articles>(keyword as string);
      this.verifyCache(articles, max as string, searchIn, res);

      articles = await getGNewsByKeyWord(
        keyword as string,
        max as string,
        searchIn
      );
      articles.wordFrequency = getWordFrequencyInContent(articles);
      await cache.setItem(keyword as string, articles, { ttl: 60 });

      return this.sendSuccessResult(res, articles);
    } catch (e) {
      return this.sendErrorResult(res, KEYWORD_IS_REQUIRED_MESSAGE);
    }
  };

  validateMaxNumber = (res: Response, max: string) => {
    const maxNumber = parseInt(max);

    if (isNaN(maxNumber)) {
      return this.sendErrorResult(res, MAX_IS_NOT_NUMBER_MESSAGE);
    } else if (maxNumber == 0) {
      return this.sendErrorResult(res, MAX_IS_ZERO_MESSAGE);
    }
  };

  validateInTitle = (res: Response, inTitle: string) => {
    if(inTitle) {
      let boolOutput = (inTitle.toLowerCase() === "true" || inTitle.toLowerCase() === "false")
      if (!boolOutput) {
        return this.sendErrorResult(res, SEARCH_IN_IS_NOT_BOOLEAN_MESSAGE);
      }
    }
  };

  sendErrorResult = (res: Response, message: string) => {
    return res.status(400).json({
      message: message,
    });
  };

  sendSuccessResult = (res: Response, articles: Articles) => {
    return res.status(200).json(articles);
  };

  private verifyCache(articles: Articles | undefined, max: string, searchIn: string, res: Response<any, Record<string, any>>) {
    if (articles &&
      articles.totalArticles == parseInt(max as string) &&
      articles.searchIn == searchIn)
      this.sendSuccessResult(res, articles);
  }
}
