export class HttpRequest {
  constructor(service) {
    this.service = service;
  }
  async get(url, callback) {
    const resoponse = await this.service.get(url);
    callback(resoponse);
  }
  async patch(id, data) {
    this.service.patch(`/${id}`, data); // id값과 변경할 데이터
  }
}
