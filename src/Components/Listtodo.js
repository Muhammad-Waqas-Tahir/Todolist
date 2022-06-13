import React from "react"
const Listtodo = (props) => {
console.log(props.data)

       return(

           <div>
               {
                   props.data.map((list)=>{
                       return(
                           <div key={list.id} className="listtodo">
                               <h3 >{list.title}</h3>
                               <button onClick={()=>{props.onDeleteTodo(list.id)}} className="deletebtn">Delete</button>
                           </div>
                       )
                   })
               }


           </div>
       )
}

export default Listtodo