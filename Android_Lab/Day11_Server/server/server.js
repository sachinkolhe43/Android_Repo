const express = require("express")
const cors = require("cors")
const studentRouter = require("./router/student")

const app = express()
app.use(cors("*"))
app.use(express.json())
app.use("/student", studentRouter)

app.listen(4000, "0.0.0.0", () => {
  console.log("Server stated at port 4000")
})
