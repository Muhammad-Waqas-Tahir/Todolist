import './App.css';
import Addtodo from "./Components/Addtodo";
import Listtodo from "./Components/Listtodo";
import React,{useState} from "react";


function App() {
    const [data,setData]=useState([
        {
        id:Math.random().toString(),
        title:"Reactjs"
    },
        {
            id:Math.random().toString(),
            title:"Javascript"
        },])


    const deleteToDoHandler = (id)=>{
        const todo = data.filter((data)=>data.id !== id)
        setData(todo)
    }

       const saveTodoHandler = (enterToDoData)=>{
        setData((preToDoList)=>{
               return [enterToDoData,...preToDoList]
           })
       }

  return (
    <div className="App">
     <h3>Todo List App</h3>
        <Addtodo onSaveTodo={saveTodoHandler} />
        <Listtodo data={data}  onDeleteTodo = {deleteToDoHandler} />
    </div>
  );
}

export default App;
