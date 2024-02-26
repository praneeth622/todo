import { useState } from 'react'
import './App.css'
function App() {

    let [todoInput,updateInput] = useState('')
    let [todoList,updateList] = useState(
      [
          {
            id:1,
            name:'Learn React'
          },
          {
            id:2,
            name:'Learn Angular'
          },
      ]
    )

    function addNewList(){
          if(todoInput ===''){
            alert("Add a Task")
          }
          else{
            let newTask=[
              ...todoList,
              {
                id : todoList.length+1,
                name : todoInput
              }
            ]
            updateList(newTask)
            updateInput('')
          }
        }

        function deletetodo(id){
          let updatedList = 
            todoList.filter(
              (obj)=>{
                return obj.id != id
              }
            )
          updateList(updatedList)
        }
      return (
            <div className="container mt-5  w-50">
                  <h3 className='text-center mb-3'>Todo App using React</h3>

                  <div className="input-group">
                        <input className="form-control" onChange={(e)=>{
                          let task = e.target.value
                          updateInput(task)
                        }} type='text' placeholder='Enter The New Task Name' value={todoInput} />
                        <button onClick={()=>{
                          addNewList()
                        }} className="btn btn-primary">Add</button>
                  </div>
                  <ul className='list-group mt-4'>{
                    todoList.map(
                      (obj)=> {
                        return(
                          <li className='list-group-item'>
                          <p>{obj.name}</p>
                            <button onClick={()=>{
                              deletetodo(obj.id)
                            }} class='btn'>❌</button>
                          </li>
                        )
                    })}
                    
                    
                  </ul>
                  
            </div>
      )




}

export default App
