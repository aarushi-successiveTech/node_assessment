import mongoose , {Schema} from 'mongoose'; 

const studentModel = new Schema({
    name:{type: String, required: true}, 
    age: {type: Number, required: true}, 
    email: {type : String, required: true}, 
    grade: {type: String, required: true}, 
}); 

module.exports = mongoose.model('student', studentModel, 'students'); 