import { cn } from "../../libraries/tailwind.js";
import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";

/**
 * @element ui-link
 *
 * @attr {string} href
 * @attr {"_blank"} [target]
 * @attr {string} [class]
 */
class UILink extends HTMLElement {
  constructor() {
    super();
    this.content = Array.from(this.childNodes);
  }

  connectedCallback() {
    this.renderTemplate();
  }

  renderTemplate() {
    render(
      this,
      html`
        <a class=${cn("text-blue-600 hover:text-blue-400", this.getAttribute("class"))} href=${this.getAttribute("href")} target=${this.getAttribute("target")}>
          ${this.content}
        </a>
      `
    );
  }
}

customElements.define("ui-link", UILink);
