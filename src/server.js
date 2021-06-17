import React from "react"
import { renderToString } from "react-dom/server"

import App from "./components/app"

module.exports = function render(someJsonData) {
  // you can setup redux or context api or pass as a props
  let content = renderToString(<App props={someJsonData} />)

  return { content }
}
