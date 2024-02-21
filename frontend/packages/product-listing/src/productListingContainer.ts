import { Product } from "@frontend/common";
import { Component, html } from "@plumejs/core";
import productStyles from "./products.scss?inline";

@Component({
  selector: "app-product-listing",
  styles: productStyles,
})
export default class ProductListing {
  products: Product[] = [];
  mount() {
    this.loadProducts();
  }
  private async loadProducts() {
    if (!this.products.length) {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      this.products = data;
    }
  }
  render() {
    return html`<fieldset>
      <legend>This is product listing contianer</legend>
      <p>this is delivered from @frontend/product-listing package</p>
      ${this.products.length
        ? html`<div class="products">
            ${this.products.map(
              (product) =>
                html`<section class="product">
                  <img src="${product.image}" />
                  <p>${product.title}</p>
                  <div class="price-rating">
                    <span>&#8377; ${product.price}</span>
                    <div
                      class="rating"
                      style="--rating: ${product.rating.rate}"
                      data-count="${product.rating.count}"
                    ></div>
                  </div>
                </section>`
            )}
          </div>`
        : html`Loading..`}
    </fieldset>`;
  }
}
