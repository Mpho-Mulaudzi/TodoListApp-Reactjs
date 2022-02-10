import { useEffect, useState } from "react";
import AddtaskDisplay from "./AddTaskDisplay";

const Todolist = (props) => {
   const [title, setTask] = useState("");
   const [newtask, setNewTask] = useState(null);
   const [isPending, setPending]= useState(true);

   
    const handleSubmit= ()=>{
   
        const blog ={title};

        fetch('http://localhost:8000/newtask ',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log("new task added");
        })
    }

    useEffect(()=>{
       fetch('http://localhost:8000/newtask ')
       .then(res => {
           return res.json();
       })
       .then(data =>{
         setNewTask(data); 
         setPending(false); 
       })

    },[title]);

    const handledelete= (id)=>{
         const deleteTask = newtask.filter((blog)=> blog.id !==id);
         setNewTask(deleteTask);
        // fetch('http://localhost:8000/newtask',{
        //     method:'DELETE'
        // })

    }

   return ( <div >
       <form onSubmit={handleSubmit}>
          
            <label className="label"> Enter task-Name : </label>
             <input type="text" required
             style={{borderRadius:"4px",
              borderColor:"#f1356d"}}
              value={title}
              onChange={(e)=>setTask(e.target.value)}/>
             <button className="button"> 
       Add New task</button>
       </form>   
        
      
        {isPending &&<div>loading...</div>}
        { newtask && <AddtaskDisplay newtask={newtask} handledelete={handledelete}/> }
            </div> 
           
     );
}
 
export default Todolist;
    
