import { LitElement, html, css } from "lit";
import "./componets/custom-navbar";
import "./componets/custom-header";
import "./componets/custom-boxes";
import "./shared/custom-line";

export class LitDocs extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      data: { type: Array },
      locale: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        text-align: center;
      }
      .main__container {
        max-width: 1200px;
        margin: 0 auto;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        background: #fff;
      }
    `;
  }

  constructor() {
    super();
    this.data = [];
  }
  firstUpdated() {
    this.getTranslation("en");
  }

  async setLocale(newLocale) {
    log("this.locale", this.locale);
    if (newLocale == this.locale) return;
    await getTranslation(newLocale);
    this.locale = newLocale;
  }

  async getTranslation(locale) {
    fetch(`../../../data/${locale}.json`)
      .then((response) => response.json())
      .then((data) => (this.data = data));
  }

  render() {
    const { data } = this;
    console.log("datadata", data);
    return html`
      <nav-bar
        @set-language=${(event) => {
          this.getTranslation(event.detail);
        }}
        .navbarData=${this.data.navbar}
      ></nav-bar>
      <div class="main__container">
        <custom-header .headerData=${this.data.header}></custom-header>
        <custom-boxes .boxData=${this.data.boxes} name="Alex"></custom-boxes>
        <custom-line></custom-line>
      </div>
    `;
  }
}
