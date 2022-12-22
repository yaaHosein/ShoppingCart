import { Product } from "types/product-types";

const url = "http://localhost:9300/";

type OrderDetail = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  postcode: string;
  phone: string;
  cardExpiry: string;
  cardNumber: string;
  cardPin: string;
  nameOnCard: string;
  products: number[];
};

export class ApiDataService {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  }

  async makeOrder(order: OrderDetail): Promise<boolean> {
    // console.log("order", order);
    const response = await fetch(url + "order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log("response", response);
    return response.status === 200;
  }
}
