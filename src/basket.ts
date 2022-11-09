import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

@inject(BasketService)
export class Basket {
  get total() {
    return this.basketService.totalPrice;
  }

  constructor(private basketService: BasketService) {}

  get basketItems() {
    return this.basketService.basket;
  }

  remove(index) {
    this.basketService.remove(index);
  }
  
  removeAll() {
    this.basketService.removeAll();
  }
}
