import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {
    const [data, setData]= useState([])
    const newtask = useRef(null)
    const Saveitems = ()=>{
        if(!newtask.current.value){
            return
        }
        let newstorage =[...data, newtask.current.value]
        localStorage.setItem("hub1", JSON.stringify(newstorage))
        setData( newstorage)
        newtask.current.value=''
    }
    useEffect(()=>{
        let storeditems = JSON.parse(localStorage.getItem("hub1"))
        if(storeditems){
            setData(storeditems);}
    },[])
  return (
    <div>
      <h1> Stickey notes</h1>
      <input type='text' placeholder='Enter your task' ref={newtask} />
       <button onClick={Saveitems}> Add Task</button>
       <ul>
        {data.map((item)=>{return <li>{item}</li>})}
       </ul>
    </div>
  )
}

export default Todo
