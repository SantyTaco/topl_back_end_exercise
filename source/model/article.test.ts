import { Article } from "./article";

describe("Test Article class", () => {
  it("should create an article object", () => {
    const article = new Article(
      "titleTest",
      "descriptionTest",
      "contentTest",
      "https://rpp.pe/mundo/latinoamerica/ecuador-incautan-mas-de-tres-toneladas-de-cocaina-que-iban-a-europa-noticia-1426208",
      "https://e.rpp-noticias.io/large/2022/08/20/145714_1302097.jpg",
      "2022-08-20T21:22:27Z",
      "sourceNameTest"
    );

    expect(article.title).toEqual('titleTest');
    expect(article.description).toEqual('descriptionTest');
    expect(article.content).toEqual('contentTest');
    expect(article.url).toEqual("https://rpp.pe/mundo/latinoamerica/ecuador-incautan-mas-de-tres-toneladas-de-cocaina-que-iban-a-europa-noticia-1426208");
    expect(article.image).toEqual('https://e.rpp-noticias.io/large/2022/08/20/145714_1302097.jpg');
    expect(article.publishAt).toEqual('2022-08-20T21:22:27Z');
    expect(article.sourceName).toEqual('sourceNameTest');    
  });
});
