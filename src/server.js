import React from "react"
import { renderToString } from "react-dom/server"

import App from "./app"

module.exports = function render(props) {
  // you can setup redux or context api or pass as a props
  let content = renderToString(<App props={props} />)

  return { content, props }
}
