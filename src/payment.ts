export class Payment {
  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    console.log(event);
    const target = event.target as HTMLFormElement;
    const elements = target.elements;
    const firstName = (elements.namedItem("firstName") as HTMLInputElement)
      .value;
    const lastName = (elements.namedItem("lastName") as HTMLInputElement).value;
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

    console.log({
      firstName,
      lastName,
      email,
      postcode,
      cardExpiry,
      cardNumber,
      cardPin,
      nameOnCard,
    });
  }
}
