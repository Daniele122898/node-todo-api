const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

let Todo = mongoose.model("Todo", {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim:true //remove leading or trailing spaces.
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type:  Number,
        default: null
    }
});

//User model
//email - require, trim, string, min 1
let User = mongoose.model("User", {
   email: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   }
});

let newUser = new User({
   email:" test@test.com   "
});

newUser.save().then((doc)=>{
    console.log("Saved User ", doc)
}, (e)=>{
    console.log("Error saving user, ",e);
});

/*
let newTodo = new Todo({
    text: "Cook dinner"
});

newTodo.save().then((doc)=>{
    console.log("Saved todo", doc)
}, (e)=>{
    console.log("Unable to save todo", e)
});
let dateTime = new Date().getTime();
let timestamp = Math.floor(dateTime / 1000);
let todo2 = new Todo({
    text: "Second Todo",
    completed: true,
    completedAt: timestamp
});

todo2.save().then((doc)=>{
    console.log("Saved todo", doc);
}, (e)=>{
    console.log("Unable to solve second todo",e);
});*/