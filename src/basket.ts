import { BasketService } from "services/basket-service";
import { inject } from "aurelia-framework";
@inject(BasketService)
export class Basket {
  basketservice: BasketService;
basket(){
    return this.basketservice.basket
}
  constructor(basketSrvs) {
    this.basketservice = basketSrvs;
  }
}
