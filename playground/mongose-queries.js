var {mongoose} = require('./../server/db/mongoose');
var {User} = require('./../server/models/user');

var id = '5959dabde8f36794198bc586';

User.findById(id).then((user)=> {
    if(!user){return console.log('not found user')}
    console.log(user)
},(err)=>{
    console.log('Error: ', err)
})



