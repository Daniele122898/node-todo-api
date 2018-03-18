const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

let id = "5aaee7ea54815b283c3edf5411";

if(!ObjectID.isValid(id)){
    console.log("ID not Valid!")
}
/*
Todo.find({
   _id: id
}).then((todos)=>{
    console.log("Todos", todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log("Todo", todo);
});*/

Todo.findById(id).then((todo)=>{
    if(!todo) {
        return console.log("Id not found");
    }
    console.log("Todo By Id", todo);
}).catch((e)=>{
    console.log(e);
});