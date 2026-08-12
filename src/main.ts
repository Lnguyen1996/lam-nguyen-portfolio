import { renderApp } from "./app";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/home.css";

const root = document.querySelector<HTMLElement>("#app");
if (!root) throw new Error("Missing #app root");
renderApp(root);
