import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

type View = "products" | "basket";

@inject(BasketService)
export class App {
  basketservice: BasketService;
  activeView: View = "products";
  setActiveView(view: View) {
    this.activeView = view;
  }
}