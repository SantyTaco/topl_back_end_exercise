import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { formatGNewsData } from "../utils/articles_utils";

export const GNEWS_URL = "https://gnews.io/api/v4/search";
const GNEWS_TOKEN = "efc7850a2beac4b7c5aec5af03544eed";

export const getGNewsByKeyWord = async (keyWord: string, max: string, searchIn: string) => {
  const result: AxiosResponse = await axios.get(
    `${GNEWS_URL}`,
    {
      params: {
        q: keyWord || "",
        max: max || "",
        in: searchIn || 'tilte,description',
        token: GNEWS_TOKEN,
      },
    }
  );

  const articles = formatGNewsData(result?.data?.articles, max, searchIn);
  return articles;
};

export const getGNewsByResource = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const result: AxiosResponse = await axios.get(
      `${GNEWS_URL}?q=${query?.keyword || ""}&max=${
        query?.max || ""
      }&token=${GNEWS_TOKEN}`
    );

    return result;
  } catch (error) {}
};

