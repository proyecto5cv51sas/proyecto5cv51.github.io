class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Santiago Aguilar Sánchez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
