import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

@inject(BasketService)
export class ProductItems {
  basketservice: BasketService;
  constructor(basketservice) {
    console.log(this.products);
    this.basketservice = basketservice;
  }
  addToBasket(product) {
    this.basketservice.add(product);
  }
  products = [
    {
      id: 1,
      name: "foo",
      price: 99.99,
    },
    {
      id: 2,
      name: "baz",
      price: 33.99,
    },
  ];

}
