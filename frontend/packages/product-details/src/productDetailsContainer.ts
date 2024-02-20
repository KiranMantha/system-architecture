import { Component, html } from "@plumejs/core";

@Component({
  selector: "app-product-details",
})
export default class ProductDetails {
  render() {
    return html`<fieldset>
      <legend>This is product details contianer</legend>
      <p>this is delivered from @frontend/product-details package</p>
    </fieldset>`;
  }
}
