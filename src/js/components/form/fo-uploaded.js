import { cn } from "../../libraries/tailwind.js";
import { html, render } from "https://cdn.jsdelivr.net/npm/uhtml@4.5.11/+esm";
import "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/+esm";
import "../ui/ui-link.js";

/**
 * @element fo-uploaded
 *
 * @attr {string} fileurl
 * @attr {string} [filename]
 * @attr {string} [class]
 */
class FormUploaded extends HTMLElement {
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
        <div
          class=${cn(
            "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-gray-400 focus:border-gray-400",
            "w-full p-2.5 flex items-center justify-between gap-3 text-sm",
            this.getAttribute("class")
          )}
        >
          <ui-link type="external" href=${this.getAttribute("fileurl")} target="_blank" class="line-clamp-1">
            ${this.getAttribute("filename") ?? this.getAttribute("fileurl")}
          </ui-link>
          <ui-link type="external" href=${this.getAttribute("fileurl")} target="_blank" class="flex items-center justify-center">
            <iconify-icon icon="iconamoon:attachment" height="16" class="text-gray-600 hover:text-gray-500"></iconify-icon>
          </ui-link>
        </div>
      `
    );
  }
}

customElements.define("fo-uploaded", FormUploaded);
