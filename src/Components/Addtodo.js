import React,{useState} from "react";
const Addtodo = (props)=>{
    const [list,setList] = useState("")
    const onChangeHandler = (event)=>{
        setList(event.target.value)
        // console.log(event)
    }
    const onSubmitHandler = (event)=>{
        event.preventDefault();

        const todolist ={
            id:Math.random().toString(),
            title:list

        }

        props.onSaveTodo(todolist)
        setList("")

    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="" id="" value={list} onChange={onChangeHandler} />
                <button type="submit">Add list</button>
            </form>



        </div>
    )
}

export default Addtodo