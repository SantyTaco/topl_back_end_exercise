import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { generateArticles, gNewsArticlesData } from '../../tests/utils/generate';
import {getGNewsByKeyWord, GNEWS_URL} from './gnews_data_source';

describe("Get GNews articles", () => {
    let mock: any;

    beforeAll(() => {
      mock = new MockAdapter(axios);
    });
  
    afterEach(() => {
      mock.reset();
    });

    describe("when API call is successful", () => {
      it("should return Articles list", async () => {
        const gNewsarticles = gNewsArticlesData;
        const articles = generateArticles();
        mock.onGet(`${GNEWS_URL}`).reply(200, gNewsarticles);

        const result = await getGNewsByKeyWord('test', '3');

        expect(mock.history.get[0].url).toEqual(`${GNEWS_URL}`);
        expect(result).toEqual(articles);
      });
    });
  });