const express = require("express")
const router = express.Router()
const db = require("../db")
const utils = require("../utils")

router.get("/", (request, response) => {
  db.query("SELECT * FROM students", (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.post("/add", (request, response) => {
  const { name, course } = request.body
  db.query(
    "INSERT INTO students(name,course) VALUES(?,?)",
    [name, course],
    (error, data) => {
      response.send(utils.createResult(error, data))
    }
  )
})

router.get("/:rollno", (request, response) => {
  const { rollno } = request.params
  db.query(
    "SELECT * FROM students WHERE rollno = ?",
    [rollno],
    (error, data) => {
      response.send(utils.createResult(error, data))
    }
  )
})

router.delete("/:rollno", (request, response) => {
  const { rollno } = request.params
  db.query("DELETE FROM students WHERE rollno = ?", [rollno], (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

router.put("/edit", (request, response) => {
  const { rollno, course } = request.body
  db.query(
    "UPDATE students SET course = ? WHERE rollno = ?",
    [course, rollno],
    (error, data) => {
      response.send(utils.createResult(error, data))
    }
  )
})

module.exports = router
