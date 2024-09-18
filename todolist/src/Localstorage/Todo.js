import React, { useEffect, useRef, useState } from 'react'

const Todo = () => {
    const [newdata , setNewdata] = useState([])
    const [bufferID,  setBufferID] = useState(null) 
    const ref = useRef(null)

    const update = ()=> {
        if(!ref.current.value)
            return;

        if(bufferID!==null){
            let taskData = localStorage.getItem('hub')
            let data = taskData ? JSON.parse(taskData) : []
            data[bufferID] = ref.current.value //edit the task 
            localStorage.setItem('hub', JSON.stringify(data))
            setNewdata(data)
            setBufferID(null)
            ref.current.value=''
            return;
        }
        else{
            let newtask = [...newdata, ref.current.value]
            localStorage.setItem('hub', JSON.stringify(newtask))
            setNewdata(newtask)
            ref.current.value=''    
        }
    }

    const deleteArr = (index) => {
        let taskData = localStorage.getItem('hub')
        let data = taskData  ? JSON.parse(taskData) : []
        data.splice(index, 1)
        localStorage.setItem('hub', JSON.stringify(data))
        setNewdata(data)
    }

    const enterkey = (event)=>(event.key === 'Enter')  && update()
    const clear = ()=>{localStorage.removeItem('hub')
        setNewdata([])
    }
     
    useEffect(()=>{
        let storedItems = JSON.parse(localStorage.getItem('hub'))
        if(storedItems)
            setNewdata(storedItems)
    },[])

  return (
    <>
    <div>
    <header><h1>Sticky Notes</h1></header>
    <main>
    <section>
        <form>
        <input type='text' ref={ref} placeholder='Enter your task'  onKeyDown={enterkey}/>
        <button type="button" onClick={update}>Submit</button>
        <button type="button" onClick={clear}>Clear</button>
        </form>
        <div className='task'> 
            {newdata.map((items, index) => (
                <div  key={index}>{items}<button 
                            onClick={() => {
                            setBufferID(index)
                            ref.current.value = items
                        }}
                    >Edit</button>
                    <button onClick={() => deleteArr(index)}>Delete</button>
                </div>
            ))} 
        </div>
    </section>
    </main>
    </div>
    </>
  )
}

export default Todo
        