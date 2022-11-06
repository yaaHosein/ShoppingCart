import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";
@inject(BasketService)
export class Basket {
  basketservice: BasketService;
  basket;

  constructor(basketSrvs) {
    this.basketservice = basketSrvs;
    this.basket = this.basketservice.basket;
  }
  remove(index) {
    this.basketservice.remove(index);
    this.basket = this.basketservice.basket;
  }
}
