const express = require("express");
const router = express.Router();
const Controller = require("../controllers/todo")
// Controllers
const {
  addTodo,
  getAllTodo,updateTodo,DeleteTodo

} = require("../controllers/todo");

router.post('/add',addTodo)
router.put('/update/:id',updateTodo)
router.get('/get',getAllTodo)

router.delete('/delete/:id', DeleteTodo);

module.exports = router;