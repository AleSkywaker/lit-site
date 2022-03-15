import { LitElement, html, css } from "lit";

export class ContactPage extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      h1 {
        color: red;
      }
    `;
  }

  constructor() {
    super();
    this.title = "Contact Page";
  }

  render() {
    return html` <h1>${this.title}</h1> `;
  }
}

customElements.define("contact-page", ContactPage);
