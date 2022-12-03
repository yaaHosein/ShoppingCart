import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

type View = "products" | "basket" | "payment";

@inject(BasketService, EventAggregator)
export class App {
  activeView: View = "products";
  private paymentButtonClickedEventSubscription: Subscription;

  get basketLength() {
    return this.basketService.basket.length;
  }

  constructor(
    private basketService: BasketService,
    private eventAggregator: EventAggregator
  ) {
    this.paymentButtonClickedEventSubscription = this.eventAggregator.subscribe(
      "payment-button-clicked-from-basket-view",
      () => {
        this.setActiveView("payment");
      }
    );
  }

  setActiveView(view: View) {
    this.activeView = view;
  }

  detached() {
    this.paymentButtonClickedEventSubscription.dispose();
  }
}
