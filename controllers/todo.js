const Todo = require("../models/Todo");


  const get = async (req , res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
}


exports.addTodo = async (req, res, next) => {
  const {title, description,finished,created_at,finished_at,updated_at} = req.body;

  try {
    
    const todo = await Todo.create({
      title, description,finished,created_at,finished_at,updated_at

    });
    await todo.save();

    res.status(201).json(todo);
      
  } catch (err) {
    next(err);
  }
};





exports.updateTodo = async (req, res) => {
  
  try {
      const {title, description,finished,created_at,finished_at,updated_at} = req.body;
      
      await Todo.findByIdAndUpdate(req.params.id, {title, description,finished,created_at,finished_at,updated_at})

      res.json({msg: "Update Success!"})
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
};

exports.getAllTodo= async (req, res) => {
   
  
  Todo.find().then(todo=>{res.send(todo)}).catch(
       err=>{res.status(500).send({message:err.message || "Error Occured while retrieving user information"})}
       )
};
exports.DeleteTodo = async (req , res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error('todo not found')
  }

  await todo.remove()
  res.status(200).json({id : req.params.id})
}