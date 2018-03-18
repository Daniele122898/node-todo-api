//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
    if (err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDb server");
    const db = client.db("TodoApp");

    //findOneAndUpdate
    db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("5aae7bfafaf2a235e45d5f19")
    },{
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    client.close();
});