const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

port = 3000;


main()
.then( ()=>{
    console.log("connection successfully established");
}).catch( (err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/",(req,res)=>{
    res.send("working port");
})

app.get("/chats",async(req,res)=>{
    let chats = await Chat.find(); 
    console.log(chats);
    res.render("show.ejs", {chats})
})
app.get("/new",async(req,res)=>{
    res.render("new.ejs",)
})
app.post("/chat", (req, res) => {
  const { from, msg, to } = req.body;
  const newChat = new Chat({
    from: from,
    msg: msg,
    to: to,
    created_at: new Date()
  });
  newChat
    .save()
    .then((result) => {
      console.log("Chat message saved:", result);
      res.redirect("/chats");
    })
    .catch((error) => {
      console.error(error);
    });
});
  app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  });
  

  app.put('/chats/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const newMsg = req.body.newMsg;
  
      const updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { new: true });
  
      if (!updatedChat) {
        res.send("not updated");
      }
      res.redirect('/chats');
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  });

  app.delete("/chats/:id", async(req, res) =>{
    try {
      const { id } = req.params;
      const deleteChat = await Chat.findByIdAndDelete(id);
      
      if (!deleteChat) {
        return res.status(404).send("Chat message not found.");
      }
      console.log(deleteChat);
      res.redirect("/chats");
    } catch (error) {
      console.log(err);
    }
  });
  
  
  
app.listen( port ,(req,res) =>{
    console.log(`lisner is working on port ${port}`);
})