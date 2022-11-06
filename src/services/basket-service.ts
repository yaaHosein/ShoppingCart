export class BasketService {
  basket = [];
  add(item) {
    this.basket.push(item);
  }
}
