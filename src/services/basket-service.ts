export class BasketService {
  add(item) {
    this.basket.push(item);
  }
  basket = [];
}
