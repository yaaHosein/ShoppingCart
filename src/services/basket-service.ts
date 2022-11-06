export class BasketService {
  remove(index) {
    this.basket.splice(index,1)
  }
  basket = [];
  add(item) {
    this.basket.push(item);
  }
}
