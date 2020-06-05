const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
  nunjucks.configure("src/views", {
    express: server,
    noCache: true
  })

// config public directory
server.use(express.static("public"))

//routes

server.get("/", (req, res) => {
  return res.render("index.html")
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

// ligar o servidor
server.listen(3000)
