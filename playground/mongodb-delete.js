var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    db.collection('Users').deleteMany({name:"Evgen"}).then((result)=>{
        console.log('Delete users Evgen');
        console.log(JSON.stringify(result, undefined, 2))
    },(err)=>{
        console.log("Unable to find user");
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("59590b162f97ec12385117bf")
    }).then((result)=>{
        console.log('Delete _id 59590b162f97ec12385117bf');
        console.log(JSON.stringify(result, undefined, 2))
    },(err)=>{
        console.log("Unable to find user");
    });

    db.close();
});



















