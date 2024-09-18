import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Getpost = () => {
  const [data, setData] = useState([])
  const [newuser,setNewuser] = useState({
    name: '',
    email: '',
    age:''
  })
  const getuser = async ()=>{
    const userdata = axios.get('http://localhost:4000/gettext')
    setData(userdata.data)
  }
  const update = async ()=>{
    axios.post('http://localhost:4000/posttext',newuser)
    setNewuser({
      name: '',
      email: '',
      age:''
    })
    getuser()
  }
  useEffect(
    getuser()
  )

  return (
    <>
       <input  type='text'  placeholder='Enter your name' onChange={(e).setNewuser({...newuser,name:e.target.value}) }value={newuser.value} />
       <input  type='email'  placeholder='Enter your email' onChange={(e).setNewuser({...newuser,email:e.target.value}) }value={newuser.value} />
       <input  type='number'  placeholder='Enter your age' onChange={(e).setNewuser({...newuser,age:e.target.value}) }value={newuser.value} />

      <button onClick={update}>Update</button>
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>age</th>
        </tr>
        {
            data.map((user)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            })
        }

       
      </table>
    </>
  )
}

export default Getpost
