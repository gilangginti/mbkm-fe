import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";

/**
 * @element public-header
 */
class PublicHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <header>
          <div class="h-[34px] w-full flex bg-ulbiOrange text-white text-sm gap-6 justify-center items-center">
            <span>+62821 2000 2716</span>
            <span>+62813 1111 0194</span>
            <span>info@ulbi.ac.id</span>
            <span>Jl. Sariasih No.54, Sarijadi, Sukasari, Kota Bandung</span>
          </div>
          <div class="h-[80px] w-full flex gap-6 justify-evenly items-center shadow-md">
            <div class="flex gap-6 items-center">
              <img width="${150}" src="src/images/logo_ulbi_header.png" alt="logo" />
              <ui-link href="" className="text-gray-600 font-semibold hover:text-blue-400">Home</ui-link>
              <ui-link href="about" className="text-gray-600 font-semibold hover:text-blue-400">Tentang</ui-link>
            </div>
            <div class="flex gap-6">
              <ui-button color="orange" type="button" href="/login">Login</ui-button>
            </div>
          </div>
        </header>
      `
    );
  }
}

customElements.define("public-header", PublicHeader);
