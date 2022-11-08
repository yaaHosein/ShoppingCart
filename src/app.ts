import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

type View = "products" | "basket";

export class App {
  basketservice: BasketService;
  activeView: View = "products";
  setActiveView(view: View) {
    this.activeView = view;
  }

  //   addToBaskett() {
  //     this.basketservice.basket.length;
  //   }
}
@inject(BasketService)
export class Basket {
  basketservice: BasketService;
  basket;

  constructor(basketSrvs) {
    this.basketservice = basketSrvs;
    this.basket = this.basketservice.basket;
  }
  basketLength(product) {
    this.basketservice.add(product);
  }
}

