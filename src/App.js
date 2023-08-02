import React, { useState } from "react";
import ToDolist from "./ToDolist";

const App = () =>
{

  const [task,mTask]=useState("");
  const [t , m] = useState([]);

  const addTask = (ev) =>
  {
    mTask(ev.target.value);
  };

  const onsubmit = () =>
  {
     m((oldIt)=>
     {
      return [...oldIt,task]
     });
    mTask('');
  };

  const deleteItem = (id) => {
    console.log('deleted')
    m((oldIt)=>
    {
      return oldIt.filter((arrElem,index)=>
      {
          return  index!==id
      })
    })
  }
 
  return(
    <>
    <div className="main_div">
    <div className="center_">
    <br/> 
  
    <h1>Task Manager</h1>
    <br/>
    <input type="text" 
    
            onChange={addTask} placeholder="enter your task ..." value={task}>

  
  
     </input>
    
    <button onClick={onsubmit}>+</button> 
    <ol>
    
        {t.map((item,index)=>
        {
        return( <ToDolist
          key = {index} id={index} text={item} onSelect={deleteItem}
         />
        )
        })
        }
     
    </ol>
    </div>
    </div>

    </>
  );
};

export default App;