import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3001/api/beers"
    : "https://beer-shop-service.onrender.com/api/beers";

const axiosInstance = axios.create({
  baseURL,
});

class APIClient {
  async getAll() {
    return axiosInstance.get().then((response) => response.data);
  }
  async getByType(type) {
    return axiosInstance
      .get("", { params: { type } })
      .then((response) => response.data);
  }
  async getByTag(tag) {
    return axiosInstance
      .get("", { params: { tag } })
      .then((response) => response.data);
  }
  async getById(id) {
    return axiosInstance.get(`/${id}`).then((response) => response.data);
  }
  async getPopular() {
    return axiosInstance
      .get("", { params: { isPopular: true } })
      .then((response) => response.data);
  }
}

export default APIClient;
