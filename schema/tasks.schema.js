import mongoose from 'mongoose';
const { Schema } = mongoose;

const tasksSchema = new Schema({
  title: String, 
  description: String,
  status: String,
 
  user: {
    type: mongoose.Schema.
    Types.ObjectId,
    ref: "Users",
    required: true
  },
  date: {type: Date, default: Date.now}
});
const Tasks = mongoose.model('tasks', tasksSchema);

export default Tasks;