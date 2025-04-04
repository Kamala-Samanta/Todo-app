import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function showTodo(){
    const [todo] = await pool.query(`SELECT * FROM todo;`);
    return todo;
}

export async function updateTodo(id,status){
    const [result] = await pool.query(`UPDATE todo
        SET status = ? 
        WHERE id = ?`,[status, id]);
    return result.affectedRows > 0;
}
 
export async function addTodo(task){
    const [todo] = await pool.query(
      `INSERT INTO todo (task,status) VALUES(?, "pending");`,[task]
    );

    return(todo.insertId);
}

export async function deleteTodo(id){
    const [result] = await pool.query(`DELETE FROM todo WHERE id = ?`,[id]);
    return result.affectedRows > 0;
}

