// import React,{ useEffect, useState } from 'react';
// import './App.css';
// //import { LuFolderCheck } from "react-icons/lu";
// import { MdOutlineFolderDelete } from "react-icons/md";
// import { TbFolderCheck } from "react-icons/tb";

// function App() {
//   const [isCompleteScreen,setIsCompleteScreen] = useState(false);
//   const [allTodos,setTodos] = useState([]);
//   const [newTitle, setNewttile] = useState("");
//   const [newDescription, setNewDescription] = useState("");
//   const [completedTodos,setCompletedTodos] = useState([]);

//   const handleAddTodo = () => {
//     let newTodoItem = {
//       title:newTitle,
//       description:newDescription
//     }

//     let updatedTodoArr = [...allTodos];
//     updatedTodoArr.push(newTodoItem);
//     setTodos(updatedTodoArr);
//     localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
//   };

//   const handleDeleteTodo = (index) =>{
//     let reducedTodo = [...allTodos];
//     reducedTodo.splice(index,1);
//     localStorage.setItem('todolist',JSON.stringify(reducedTodo));
//     setTodos(reducedTodo);
//   }

//   const handleComplete = (index)=>{
//     let now = new Date();
//     let dd = now.getDate();
//     let mm = now.getMonth();
//     let yyyy = now.getFullYear();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s= now.getSeconds();
//     let completedOn = dd+'/'+mm+'/'+yyyy+'at'+h+':'+m+':'+s;

//     let filteredItem = {
//       ...allTodos[index],
//       completedOn:completedOn
//     }

//     let updatedCompletedArr = [...completedTodos];
//     updatedCompletedArr.push(filteredItem);
//     setCompletedTodos(updatedCompletedArr);
//   }

//   useEffect(()=>{
//     let savedTodo = JSON.parse(localStorage.getItem('todolist'));
//     if(savedTodo){
//       setTodos(savedTodo);
//     }
//   },[]);
//   return (
//     <div className='App'>
//       <h1>My ToDo's</h1>
//       <div className='todo-warapper'>
//         <div className='todo-input'>
//           <div className='todo-input-item'>
//             <label>Title:</label>
//             <input type='text' value={newTitle} onChange={(e)=>setNewttile(e.target.value)} placeholder='Title of the task?'/> 
//           </div>
//           <div className='todo-input-item'>
//             <label>Description:</label>
//             <input type='text' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='Breif of the task?'/>
//           </div>
//           <div className='todo-input-item'>
//             <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
//           </div>
//         </div>
//         <div className='btn-area'>
//           <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} 
//           onClick={()=>setIsCompleteScreen(false)}>ToDo</button>
//           <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} 
//           onClick={()=>setIsCompleteScreen(true)}>Completed</button>
//         </div>
//         <div className='todo-list'>
//           {isCompleteScreen===false && allTodos.map((item,index)=>{
//             return(
//               <div className='todo-list-item'>
//                 <div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>    
//                 </div>
//                 <div>
//                   <MdOutlineFolderDelete className='icon' onClick={()=> handleDeleteTodo(index)} title='Deelet?'/>
//                   <TbFolderCheck className='check-icon' onClick={()=>handleComplete(index)} title='Complete?'/>
//                 </div>
//               </div>
//             )
//           })}

//           {isCompleteScreen===true && completedTodos.map((item,index)=>{
//             return(
//               <div className='todo-list-item' key={index}>
//                 <div>
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                   <p><small>Completed on: {item.completedOn}</small></p>
//                 </div>
//                 <div>
//                   <MdOutlineFolderDelete className='icon' onClick={()=> handleDeleteTodo(index)} title='Delete?'/>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import { MdOutlineFolderDelete } from "react-icons/md";
import { TbFolderCheck } from "react-icons/tb";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState(""); // Corrected typo
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleAddTodo = (index) => {
    if(newTitle.trim()==="" || newDescription.trim()===""){
      alert("Please fill out both title and description");
      return;
    }
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Added +1 for correct month display
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let addedOn = dd + '/' + mm + '/' + yyyy + ' at ' + h + ':' + m + ':' + s;

    
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
      addedOn:addedOn
    }

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr));

    // Clear input fields after adding a todo
    setNewTitle("");
    setNewDescription("");
  };

  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1; // Added +1 for correct month display
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '/' + mm + '/' + yyyy + ' at ' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn
    }

    // Update completedTodos
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));

    // Also remove the todo from the allTodos array
    handleDeleteTodo(index);
  }

  const handleDeleteCompletedTodo = (index)=>{
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if(savedCompletedTodo){
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  return (
    <div className='App'>
      <h1>My ToDo's</h1>
      <div className='todo-warapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title:</label>
            <input type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder='Title of the task?' />
          </div>
          <div className='todo-input-item'>
            <label>Description:</label>
            <input type='text' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder='Brief of the task?' />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
          </div>
        </div>
        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={() => setIsCompleteScreen(false)}>ToDo</button>
          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} 
            onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          {isCompleteScreen === false && allTodos.map((item, index) => {
            return (
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Added on: {item.addedOn}</small></p>
                </div>
                <div>
                  <MdOutlineFolderDelete className='icon' onClick={() => handleDeleteTodo(index)} title='Delete?' />
                  <TbFolderCheck className='check-icon' onClick={() => handleComplete(index)} title='Complete?' />
                </div>
              </div>
            )
          })}

          {isCompleteScreen === true && completedTodos.map((item, index) => {
            return (
              <div className='todo-list-item' key={index}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><small>Completed on: {item.completedOn}</small></p>
                </div>
                <div>
                <MdOutlineFolderDelete className='icon' onClick={()=> handleDeleteCompletedTodo(index)} title='Delete?'/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
