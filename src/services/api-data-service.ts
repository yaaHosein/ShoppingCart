import { Product } from "types/product-types";

const url = "http://localhost:9300/";

export class ApiDataService {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  }
}
