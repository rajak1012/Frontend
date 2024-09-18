import React, { useState } from 'react'
import Child from './Child'

const CustomComponent = ()=>{
    return <>
        <h1>Component</h1>
        <p>dfvdfgdfdddfvdfv</p>
    </>
}

const Paren = () => {
    const [data, setData]= useState("Raja")

    const change = () => {
        
        setData("Mahendran")
    }

    return (
        <>
            <Child  name={data}  onclick={change}
            children={<CustomComponent/>}/>
        </>
    )
}

export default Paren
