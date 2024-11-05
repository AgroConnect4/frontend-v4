import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UserTable = () => {
    
    const [user, setUsers]= useState([])
    useEffect(()=>{
        axios.get('/api/users')
        .then(response=>{
            setUsers(response.data);
        })
        .catch(error=>{
            console.error('Ocorreu um erro ao buscar o usuario!',error)
        })
    },[])
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {user.map(user=>(
                <tr key={user.id} >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UserTable