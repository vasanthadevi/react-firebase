import './App.css';
import {Button,TextField} from '@mui/material';
import { useState, useEffect } from "react";
import { db } from './firebaseConfig';
import firebase from 'firebase/compat/app';
import TodoListItem from './todo';

function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodo();    
  }, []);

  function getTodo() {
    db.collection("todos").onSnapshot(function(querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

      <h1> ToDo Application</h1>
      <form>
      <TextField id="standard-basic" label="Write a Todo" value={todoInput} onChange={(e) => {
        setTodoInput(e.target.value)
        
        }} variant="standard" style={{maxWidth: "300px", width: "90vw"}} />
        <Button type = "submit" variant="contained" onClick={addTodo} style = {{ display: "none"}}>Default</Button>
        </form>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "left"}}>
        {todos.map((todo) => (
          <TodoListItem 
            todo={todo.todo} 
            inprogress={todo.inprogress} 
            id={todo.id}/>
        ))}
        </div>
    </div>
    </div>
  );
}

export default App;
