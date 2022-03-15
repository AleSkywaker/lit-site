import { LitElement, html, css } from "lit";

export class MainPage extends LitElement {
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
    this.title = "Main Page";
  }

  render() {
    return html` <h1>${this.title}</h1> `;
  }
}

customElements.define("main-page", MainPage);
