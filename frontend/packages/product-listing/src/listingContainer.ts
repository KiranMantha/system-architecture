import { Component, html } from "@plumejs/core";

@Component({
  selector: "app-product-listing",
})
export default class ProductListing {
  render() {
    return html`<div>
      <h2>This is product listing contianer</h2>
      <p>this is delivered from @frontend/product-listing package</p>
    </div>`;
  }
}
