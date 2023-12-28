import ApiService from "./ApiService";
class ProductService extends ApiService {
  get entity() {
    return "products";
  }

  async gets(params = null) {
    let option = {
      method: "get",
      url: `/${this.entity}/`,
    };
    if (params) {
      option = { ...option, params };
    }
    return this.request(option);
  }

  async create(data) {
    return this.request({
      method: "post",
      url: `/${this.entity}/`,
      data: data,
    });
  }

  async get(id) {
    return this.request({
      method: "get",
      url: `/${this.entity}/${id}/`,
    });
  }

  async update({ data, id }) {
    return this.request({
      method: "put",
      url: `/${this.entity}/${id}/`,
      data: data,
    });
  }

  async delete(id) {
    return this.request({
      method: "delete",
      url: `/${this.entity}/${id}/`,
    });
  }
}

export default new ProductService();
