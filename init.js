const mongoose = require("mongoose");
const Chat = require('./models/chat.js');

main()
.then( ()=>{
    console.log("connection successfully established");
}).catch( (err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats =
    [
        {
            from:"laxman",
            to:'kajal',
            msg:'hyy kaisi ho',
            created_at: new Date(),
        },
        {
            from:"kuldeep",
            to:'laxman',
            msg:'kaisi he wo',
            created_at: new Date(),
        },
        {
            from:"Lakshit",
            to:'laxman',
            msg:'aaj wo or tum dono yellow dress me,wa',
            create_at: new Date(),
        },
    ]
Chat.insertMany(allChats);

