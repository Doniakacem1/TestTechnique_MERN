const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"],
      },
      description: {
        type: String,
        required: [true, "Please provide description"],
        maxlength: 30,
      },
      finished : {
        type: Boolean,
        required: [true, "Please provide fished"],
      },
      created_at :{
        type:Date,
        required: [true, "Please provide created_at"],
        default: Date.now

      },
      finished_at :{
        type:Date,
        default: Date.now

      },
      updated_at :{
        type:Date,
        default: Date.now

      },
});
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;