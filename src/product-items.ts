import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

@inject(BasketService)
export class ProductItems {
  products = [
    {
      id: 1,
      name: "Laptop",
      price: 99.99,
    },
    {
      id: 2,
      name: "Camera",
      price: 33.99,
    },
  ];

  constructor(private basketService: BasketService) {}

  addToBasket(item) {
    this.basketService.add(item);
  }
}
