import { LitElement, html, css } from "lit";

class Header extends LitElement {
  static get properties() {
    return {
      litImg: { type: String },
      headerData: { type: Object },
    };
  }

  constructor() {
    super();
    this.litImg = "../../assets/lit.png";
  }

  static get styles() {
    return css`
      .header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header {
        padding: 0 20px;
        text-align: center;
        min-height: 400px;
      }

      .header h1 {
        font-size: 3.5em;
        font-weight: bold;
        background: linear-gradient(
          to left,
          #3474e6 50%,
          #78a3ee 50%,
          #330867 80%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .header p {
        text-align: center;
        font-size: 1.1em;
      }

      .header img {
        max-width: 400px;
      }
    `;
  }

  render() {
    return html`
      <header class="header">
        <div class="container">
          <div>
            <h1>${this.headerData?.title}</h1>
            <p>
              ${this.headerData?.description1}
              <a
                href="https://www.webcomponents.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong><em>${this.headerData?.web_components}</em></strong></a
              >
              ${this.headerData?.description2}
            </p>

            <p>
              ${this.headerData?.description3}
              <a
                href="https://lit.dev/docs/v1/lit-html/introduction/"
                target="_blank"
                rel="noopener noreferrer"
                ><strong><em>${this.headerData?.lit_html}</em></strong></a
              >
              ${this.headerData?.description4}
              <a
                href="https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>
                  <em>${this.headerData?.shadow_dom}</em>
                </strong></a
              >${this.headerData?.description5}
            </p>
          </div>
          <img src=${this.litImg} alt="lit" />
        </div>
      </header>
    `;
  }
}

customElements.define("custom-header", Header);
