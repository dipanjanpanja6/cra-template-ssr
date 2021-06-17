import express from "express"
import path from "path"
import template from "./src/template"
import ssr from "./src/server"

const app = express()

app.use("/assets", express.static(path.resolve(__dirname, "assets")))
app.use("/media", express.static(path.resolve(__dirname, "media")))

app.disable("x-powered-by")
app.listen(process.env.PORT || 3000)

app.get("/", (req, res) => {
  //fetch call and sent data in ssr()
  const { content } = ssr(someJsonData)
  const response = template("Server Rendered Page", content)
  res.setHeader("Cache-Control", "assets, max-age=604800")
  res.send(response)
})

const someJsonData = { name: "React ssr" }
