export class BasketService {
  basket = [];
  add(item) {
    this.basket.push(item);
  }
  remove(index) {
    this.basket.splice(index, 1);
  }
  removeAll() {
    // this.basket.splice(index, this.basket.length);
    this.basket = [];
  }
}
