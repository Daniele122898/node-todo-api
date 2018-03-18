
//User model
//email - require, trim, string, min 1


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