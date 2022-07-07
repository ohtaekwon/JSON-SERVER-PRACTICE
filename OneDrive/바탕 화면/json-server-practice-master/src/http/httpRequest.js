export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  async get(url, callback) {
    const resoponse = await this.service.get(url);
    callback(resoponse);
  }
}
