import { LitElement, html, css } from "lit";
import "../shared/icons/white-horse";
import "../shared/icons/web-components";
import "../shared/icons/easy-use";

export class CustomBoxes extends LitElement {
  static get properties() {
    return {
      boxData: { type: Array },
      name: { type: String },
    };
  }

  static styles = [
    css`
      :host {
      }
      .boxes .container {
        display: flex;
        justify-content: space-between;
        max-width: 1090px;
      }

      .box {
        flex: 1;
        background: #3474e6;
        color: #fff;
        border-radius: 10px;
        margin: 20px 10px;
        padding: 15px 20px;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .box i {
        margin-right: 10px;
      }
      .box img {
        padding-top: 20px;
        box-sizing: border-box;
      }
      .box p {
        font-size: 1.2em;
        box-sizing: border-box;
      }
    `,
  ];

  constructor() {
    super();
    this.boxData = {};
  }
  render() {
    const { boxData } = this;
    return html`
      <section class="boxes">
        <div class="container">
          ${boxData.map(
            (box) => html`
              <div class="box">
                <img src="${box.urlImage}" alt="${box.title}" />
                <h2>${box.title}</h2>
                <p>${box.description}</p>
              </div>
            `
          )}
        </div>
      </section>
    `;
  }
}
customElements.define("custom-boxes", CustomBoxes);
