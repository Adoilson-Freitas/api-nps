import express from 'express';
const app = express()

app.get("/", (req, res) => {
  return res.json({message: "Oi"})
})

app.post("/", (req, res) => {
  return res.json({message: "OK"})
})
app.listen(3333) 