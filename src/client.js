import React from "react"
import { hydrate } from "react-dom"
import App from "./app"
const props = window.__STATE__
delete window.__STATE__

hydrate(<App props={props} />, document.querySelector("#app"))
