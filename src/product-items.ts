import { BasketService } from "./services/basket-service";
import { inject } from "aurelia-framework";
import { ApiDataService } from "./services/api-data-service";
import { Product } from "types/product-types";

type DataStatus = "idle" | "loading" | "loaded" | "error";

@inject(BasketService, ApiDataService)
export class ProductItems {
  searchFieldValue = "";
  productsStatus: DataStatus = "idle";

  private allProducts: Product[] = [];
  products: Product[] = this.allProducts;

  constructor(
    private basketService: BasketService,
    private apiDataService: ApiDataService
  ) {}

  async created() {
    this.productsStatus = "loading";
    try {
      this.products = this.allProducts =
        await this.apiDataService.getProducts();
      this.productsStatus = "loaded";
    } catch (error) {
      this.productsStatus = "error";
    }
  }

  addToBasket(item) {
    this.basketService.add(item);
  }

  search() {
    const lowerCaseSearchValue = this.searchFieldValue.toLowerCase();

    if (lowerCaseSearchValue === "") {
      this.products = this.allProducts;
      return;
    }

    const filteredProducts = this.products.filter((product) => {
      const nameLowerCase = product.name.toLowerCase();
      return nameLowerCase.includes(lowerCaseSearchValue);
    });
    this.products = filteredProducts;
  }
}