import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

type View = "products" | "basket";
@inject(BasketService)
export class App {
  basketservice: BasketService;
  activeView: View = "products";
  me: View = "basket";
  setActiveView(view: View) {
    this.activeView = view;
  }

  mm(view: View) {
    this.me = view;
  }

  addToBaskett() {
    this.basketservice.basket.length;
  }
}
