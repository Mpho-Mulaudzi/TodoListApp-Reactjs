const AddTaskDisplay = ({newtask, handledelete}) => {
    
 return ( <div>
         {newtask.map((task)=> (
                        <div className="blog-preview" key={task.id}>
                        <li>{task.title} </li>
                        <button className="button" onClick={()=>{handledelete(task.id)}}>
                            Done</button>
             </div>
        ))}
    </div> 
    );
}
 
export default AddTaskDisplay;