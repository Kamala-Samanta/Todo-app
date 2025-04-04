import express from "express";
const app = express();
import { showTodo , updateTodo, addTodo, deleteTodo } from "./database.js";
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const port = 8777;
app.get("/",(req,res)=>{
    res.send("hello");
})

app.get("/todo", async (req, res) => {
    const todo = await showTodo();
    res.render("todo.ejs", {todo});
});

app.post("/todo", async (req, res) => {
    const task = req.body.task;
    await addTodo(task);
    res.redirect("/todo");
});

app.post("/todo/delete", async (req, res) => {
    const id = req.body.id;
    await deleteTodo(id);
    res.redirect("/todo");
});

app.post("/todo/check", async (req, res) => {
    const id = req.body.id;
    let status = req.body.status;
    if(status === "done"){
        status = "pending";
    }
    else{
        status = "done";
    }
    await updateTodo(id, status);
    res.redirect("/todo");
});

app.listen(port, ()=>{
    console.log("app is listening on port", port);

});
