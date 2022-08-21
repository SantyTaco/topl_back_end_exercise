import { Request, Response, NextFunction } from "express";
import { getGNewsByKeyWord } from "../data_sources/gnews_data_source";
import { CacheContainer } from "node-ts-cache";
import { MemoryStorage } from "node-ts-cache-storage-memory";
import { Articles } from "../model";

const cache = new CacheContainer(new MemoryStorage());

export default class ArticlesController {
  getNewsByKeyWord = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let articles: Articles | undefined;
    const keyword = req.query.keyword;
    const max = req.query?.max || "100";

    this.validateMaxNumber(res, max as string);

    articles = await cache.getItem<Articles>(keyword as string);
    if (articles) this.sendSuccessResult(res, articles);

    articles = await getGNewsByKeyWord(keyword as string, max as string);
    await cache.setItem(keyword as string, articles, { ttl: 60 });

    this.sendSuccessResult(res, articles);
  };

  validateMaxNumber = (res: Response, max: string) => {
    const maxNumber = parseInt(max);
    let response;

    if (isNaN(maxNumber)) {
      response = res.status(400).json({
        message: "max parameter is not a number",
      });
      return response;
    } else if (maxNumber == 0) {
      response = res.status(400).json({
        message: "max parameter is zero",
      });
      return response;
    }
  };

  sendSuccessResult = (res: Response, articles: Articles) => {
    return res.status(200).json({
      data: articles,
    });
  };
}
