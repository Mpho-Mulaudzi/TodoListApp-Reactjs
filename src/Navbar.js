const Navbar = () => {
    
    const list="Dishes";
    
    return ( <nav className="navbar">
        <h1>My daily To-do list</h1>
        <div className="links">
       <a href="/" style={{color:"#f1356d",
       borderRadius:"8px"}}>Your tasks</a> 
        <a href="/create" style={{color:"#f1356d"
    ,borderRadius:"8px"}}>Mpho-Mulaudzi</a> 
       </div>
       </nav>);
}
 
export default Navbar;