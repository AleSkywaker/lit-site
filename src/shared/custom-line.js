import { LitElement, html, css } from "lit";

export class CustomLine extends LitElement {
  static get properties() {
    return {
      litImg: { type: String },
      headerData: { type: Object },
    };
  }
  static styles = [
    css`
      .line .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
      }

      .line div {
        width: 91%;
        border-radius: 30px;
        height: 1px;
        background-color: #3474e6;
      }
    `,
  ];

  constructor() {
    super();
    this.litImg = "../../assets/lit.png";
  }

  render() {
    return html`
      <div class="line">
        <div class="container">
          <div></div>
          <img src=${this.litImg} alt="lit" width="20px" />
          <div></div>
        </div>
      </div>
    `;
  }
}
customElements.define("custom-line", CustomLine);
