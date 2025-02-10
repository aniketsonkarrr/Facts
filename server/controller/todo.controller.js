import pool from "../model/db.js";


const getAllTodos=(req,res)=>{
    let allTodos;
    pool.query("SELECT * from todo")
    .then((result)=>{
        allTodos=result;
        res.status(200).json(allTodos.rows);
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).send("Server error while fetching all todos");
    });
};


const newTodo=(req,res)=>{
    let {body:{description}}=req;
    pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",[description])
    .then((result)=>{
        console.log(result);
        let newTodo=result;
        res.status(201).json(newTodo.rows[0]);
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).send("Server error");
    })
};


const getTodo=(req,res)=>{
    const {id}=req.params;
    pool.query("SELECT * FROM todo WHERE id = $1", [id])
    .then((result)=>{
        console.log(result);
        let todo=result;
        res.status(200).json(todo.rows[0]);
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).send("Server error");
    });
};


const deleteTodo=(req,res)=>{
    const {id}=req.params;
    pool.query("DELETE FROM todo WHERE id = $1", [id])
    .then((result)=>{
        console.log(result);
        res.status(200).json("Todo Deleted");
    }).catch((err)=>{
        console.log(err);
        console.log(err.message);
        res.status(500).send("Server error");
    });
};


export {getAllTodos,getTodo,newTodo,deleteTodo};