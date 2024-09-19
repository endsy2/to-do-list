import React ,{useState} from "react";

function ToDoList(){

    const [task,setTask]=useState(["read book","watch movie"]);
    const [newTask,setNewTask]=useState("");

    const handleInputChange=(event)=>{
        
            setNewTask(event.target.value);
        
        
    }
    const addTask=()=>{
        if(newTask.trim!=="")
        setTask(t=>[...t,newTask])
    }
    const deleteTask=(index)=>{
        setTask(task.filter((task,i)=>i!==index))
    }
    const moveUp=(index)=>{
        if(index>0){

        const newArray=[...task];
        [newArray[index],newArray[index-1]]=[newArray[index-1],newArray[index]];
        setTask(newArray)
        }
    } 
    const moveDown=(index)=>{
        if(index<task.length-1){

            const newArray=[...task];
            [newArray[index],newArray[index+1]]=[newArray[index+1],newArray[index]];
            setTask(newArray)
            }
    }



    return (
        <div className="toDoList">
            <h1>To Do List</h1>
            <div>
                <input type="text"  placeholder="enter the task..." onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ul>
                {task.map((task,index)=><li key={index}><span className="task">{task}</span>
                                        <div className="div-button">
                                        <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                                        <button className="move" onClick={()=>moveUp(index)}>Move-up</button>    
                                        <button className="move" onClick={()=>moveDown(index)}>Move-Down</button>
                                        </div>  
                </li>
                                         
            )}
                
                
            </ul>
            
        </div>
    )
}
export default ToDoList