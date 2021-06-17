import express from "express"
import path from "path"
import template from "../src/template"
import ssr from "../src/server"
import fetch from "node-fetch"

const app = express()

app.use("/assets", express.static(path.resolve(__dirname, "../public/assets")))
app.use("/media", express.static(path.resolve(__dirname, "../public/media")))

app.disable("x-powered-by")
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running")
})

app.get("/", async (req, res) => {
  //fetch call and sent data in ssr()
  const x = await fetch("https://google.com")
  const { props, content } = ssr(x)
  const response = template("Server Rendered Page", props, content)
  res.setHeader("Cache-Control", "assets, max-age=604800")
  return res.send(response)
})
