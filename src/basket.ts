import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";
@inject(BasketService)
export class Basket {
  basketService: BasketService;
  basket;

  constructor(basketSrvs) {
    this.basketService = basketSrvs;
    this.basket = this.basketService.basket;
  }
  remove(index) {
    this.basketService.remove(index);
    this.basket = this.basketService.basket;
  }
  removeAll() {
    this.basketService.removeAll();
    this.basket = this.basketService.basket;
  }
}
