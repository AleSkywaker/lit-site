import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
import "../../src/pages/main/mainPage.js";
import "../../src/pages/about/aboutPage.js";
import "../../src/pages/contact/contactPage.js";

import "../shared/icons/social-dev";

export class NavBar extends LitElement {
  static get properties() {
    return {
      img: { type: String },
      activeTab: { type: String },
      navbarData: { type: Object },
    };
  }

  static get styles() {
    return css`
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 30px;
      }
      .navbar {
        background: #3474e6;
        color: #fff;
        height: 60px;
      }

      .navbar .logo {
        font-size: x-large;
        font-weight: bold;
        color: #fff;
        text-decoration: none;
      }

      .navbar a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
      }
      .navbar a:hover {
        color: #000;
      }

      .navbar .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      .navbar .container .avatar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
      }
      .navbar .container .avatar:hover {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        border: 1px solid black;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.8);
      }
      .navbar .container img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        width: 30px;
        padding: 0;
      }
      .navbar .container img:hover {
        cursor: pointer;
      }

      .navbar ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin-right: 70px;
      }

      .navbar ul li {
        margin-left: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.devLogo = "../../assets/icons/dev-community.svg";
    this.gitLogo = "../../assets/icons/git-hub.svg";
    this.twitterLogo = "../../assets/icons/twitter.svg";
    this.mediumLogo = "../../assets/icons/medium.svg";
    this.linkedinLogo = "../../assets/icons/linkedin.svg";
    this.img = "../../assets/fotoAlex.jpg";
    this.esImg = "../../assets/es.svg";
    this.enImg = "../../assets/en.svg";
    this.navbarData = {};
  }
  firstUpdated() {
    // const router = new Router(this.shadowRoot.getElementById("outlet"));
    // router.setRoutes([
    //   { path: "(.*)", component: "main-page" },
    //   { path: "/", component: "main-page" },
    //   { path: "", component: "main-page" },
    //   { path: "#/main", component: "main-page" },
    //   { path: "#/about", component: "about-page" },
    //   { path: "#/contact", component: "contact-page" },
    // ]);
  }
  setLanguage(language) {
    this.dispatchEvent(new CustomEvent("set-language", { detail: language }));
  }

  render() {
    console.log("navbar", this.navBarData);
    return html`
      <nav class="navbar">
        <div class="container">
          <div class="logo">Lit Element</div>
          <ul class="nav">
            <li>
              <a href="#/main">${this.navbarData?.home}</a>
            </li>
            <li>
              <a href="#/about">${this.navbarData?.about}</a>
            </li>
            <li>
              <a href="#/contact">${this.navbarData?.contact}</a>
            </li>
            <li>
             <a
                href="https://www.linkedin.com/in/sandrocolombo/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src=${this.linkedinLogo} alt="linkedinLogo" />
                </a
            </li>
            <li>
              <img src=${this.mediumLogo} alt="mediumLogo" />
            </li>
            <li>
              <img src=${this.twitterLogo} alt="twitterLogo" />
            </li>
            <li>
            <a
                href="https://github.com/AleSkywaker"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src=${this.gitLogo} alt="gitLogo" />
              </a>
            </li>
            <li>
              <img src=${this.devLogo} alt="devLogo" />
            </li>
            <li>
               <a
                href="https://www.linkedin.com/in/sandrocolombo/"
                target="_blank"
                rel="noopener noreferrer"
                ><img class="avatar" src=${this.img} alt="Avatar"
              /></a>
            </li>
            <li>
              <img
                src=${this.enImg}
                alt="en"
                @click=${() => this.setLanguage("en")}
              />
            </li>
            <li>
              <img
                src=${this.esImg}
                alt="es"
                @click=${() => this.setLanguage("es")}
              />
            </li>
          </ul>
        </div>
      </nav>
    `;
    // <div id="outlet"></div>
  }
}

customElements.define("nav-bar", NavBar);
