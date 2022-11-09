import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";

type View = "products" | "basket";

@inject(BasketService)
export class App {
  activeView: View = "products";

  get basketLength() {
    return this.basketService.basket.length;
  }

  constructor(private basketService: BasketService) {}

  setActiveView(view: View) {
    this.activeView = view;
  }
}
