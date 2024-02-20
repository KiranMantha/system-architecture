import { Component, html } from "@plumejs/core";

@Component({
  selector: "app-product-listing",
})
export default class ProductListing {
  render() {
    return html`<fieldset>
      <legend>This is product listing contianer</legend>
      <p>this is delivered from @frontend/product-listing package</p>
    </fieldset>`;
  }
}
