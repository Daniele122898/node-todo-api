const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

let id = "5aaee7ea54815b283c3edf5411";

Todo.remove({}).then((res)=>{
   console.log(res);
});

//findByIdAndRemove
//findOneAndRemove