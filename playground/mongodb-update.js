var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("595948a56004c21b14b0408b")
    },{
        $set:{name: "Evgen Kaban"},
        $inc:{age: 1}
    },{
       returnOriginal: false
    }).then((result)=> {
        console.log(result);
    })

});



















