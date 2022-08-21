export class Article {
  constructor(
    public title: string,
    public description: string,
    public content: string,
    public url: string,
    public image: string,
    public publishAt: string,
    public sourceName: string
  ) {
    this.title = title;
    this.description = description;
    this.content = content;
    this.url = url;
    this.image = image;
    this.publishAt = publishAt;
    this.sourceName = sourceName;
  }
}
