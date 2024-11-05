import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'



const UserChart = () => {
    const [ data, setData ] = useState([])
    useEffect(()=>{
        axios.get('/api/user-entries')
        .then(response=>{
            setData(response.data);
        })
        .catch(error=>{
            console.error("Houve um erro ao buscar os dados do usuario!", error)
        })
    },[])
  return (
    <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
            top:5,right:30, left:20, bottom:5
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }}/>
    </LineChart>
  )
}

export default UserChart