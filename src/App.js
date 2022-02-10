
import Navbar from "./Navbar";
import Todolist from "./TodoList";


function App() {
  
  return (
    <div className="App">
       <Navbar/>
          <div className="content">
             <h1>#To-do-List</h1>
             <ul> 
             </ul>
             <Todolist />
           
            </div>
            
        
    </div>
  );
}

export default App;
