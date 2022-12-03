import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(BasketService, EventAggregator)
export class Basket {
  get total() {
    return this.basketService.totalPrice;
  }

  constructor(
    private basketService: BasketService,
    private eventAggregator: EventAggregator
  ) {}

  get basketItems() {
    return this.basketService.basket;
  }

  remove(index) {
    this.basketService.remove(index);
  }

  removeAll() {
    this.basketService.removeAll();
  }
  goToPayment() {
    this.eventAggregator.publish("payment-button-clicked-from-basket-view");
  }
}
