import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";

@Component({
    selector: "app",
    templateUrl: "app/builtInDirectivesTemplate.html"
})

export class ProductComponent2 {
    model: Model = new Model();

    constructor(ref: ApplicationRef) {
      (<any>window).appRef = ref;
      (<any>window).model = this.model;
    }
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
      return this.model.getProducts();
  }
  getProductCount(): number {
      return this.getProducts().length;
  }
  targetName: string = "Kayak";
}