import { inject } from "aurelia-framework";
import { BasketService } from "services/basket-service";
import { ApiDataService } from "./services/api-data-service";

@inject(ApiDataService, BasketService)
export class Payment {
  status: "idle" | "success" | "error" = "idle";
  constructor(
    private apiDataService: ApiDataService,
    private basketService: BasketService
  ) {}

  async onSubmit(event: SubmitEvent) {
    event.preventDefault();
    // console.log(event);

    const target = event.target as HTMLFormElement;
    // if (typeof target === "object") console.log("0");
    // console.log(target);

    const elements = target.elements;
    // if (typeof elements === "object") console.log("1");
    // console.log(elements);

    const firstName = (elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (elements.namedItem("lastName") as HTMLInputElement).value;
    const address = (elements.namedItem("address") as HTMLInputElement).value;
    const email = (elements.namedItem("email") as HTMLInputElement).value;
    const postcode = (elements.namedItem("postcode") as HTMLInputElement).value;
    const phone = (elements.namedItem("phone") as HTMLInputElement).value;
    const cardExpiry = (elements.namedItem("cardExpiry") as HTMLInputElement)
      .value;
    const cardNumber = (elements.namedItem("cardNumber") as HTMLInputElement)
      .value;
    const cardPin = (elements.namedItem("cardPin") as HTMLInputElement).value;
    const nameOnCard = (elements.namedItem("nameOnCard") as HTMLInputElement)
      .value;

    const result = await this.apiDataService.makeOrder({
      firstName,
      lastName,
      address,
      email,
      cardNumber,
      cardExpiry,
      cardPin,
      nameOnCard,
      phone,
      postcode,
      products: this.basketService.basket.map((item) => item.id),
    });

    // if (result===true) {
    //   this.status="success"}
    //   else{ this.status="error"
    // }

    this.status = result ? "success" : "error";
    if (result) {
      this.basketService.clear();
    }
  }

  back() {
    this.status = "idle";
  }
  // this.apiDataService.makeOrder({
  //   firstName,
  //   lastName,
  //   address,
  //   email,
  //   cardNumber,
  //   cardExpiry,
  //   cardPin,
  //   nameOnCard,
  //   phone,
  //   postcode,
  //   products: this.basketService.basket.map((item) => item.id),
  // });

  // console.log({
  //   firstName,
  //   lastName,
  //   address,
  //   email,
  //   postcode,
  //   phone,
  //   cardExpiry,
  //   cardNumber,
    //   cardPin,
    //   nameOnCard,
    // });
  }
