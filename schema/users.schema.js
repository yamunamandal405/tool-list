import mongoose from 'mongoose';
const { Schema } = mongoose;

const usersSchema = new Schema({
  user: String, // String is shorthand for {type: String}
  userName: String,
  password: String,
  
  date: {type: Date, default: Date.now}  
  
  
});
const Users = mongoose.model('users', usersSchema);

export default Users;