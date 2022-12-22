import { Product } from "types/product-types";

export class BasketService {
  basket: Product[] = [];
  get totalPrice() {
    let total = 0;

    for (const item of this.basket) {
      total = total + item.price;
    }
    return total;
  }

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
  clear() {
    this.basket = [];
  }
}
