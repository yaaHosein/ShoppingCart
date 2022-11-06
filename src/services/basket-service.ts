export class BasketService {
  basket = [];
  add(item) {
    this.basket.push(item);
    console.log(this.basket);
  }
}
