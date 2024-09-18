import React, { Children } from 'react'

const Child = ({name ,onclick , children}) => {
  return (
     <>
         <h1>Child  Component</h1>
    <h4>{name}</h4>
    <button  onClick={onclick}>Click me</button>
    {children}
     </>
  )
}

export default Child
