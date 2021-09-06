
import React,{useState,useEffect} from 'react'
// import { validate } from '../../../backend/model/userSchema';


function Api() {
    const [Item, setItem] = useState([]);
    const getdata=async()=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await res.json();
        console.log(data)
       setItem(data)
    }
    useEffect(()=>{

        getdata();
    },[])
    return (
        <>
        <table>
            <tr>
                <th>Name</th>
                <th>UserName</th>
            </tr>
        
        {
            Item.map((val,index)=>{
                return (
                    <tr key={index}>
                    <td >{val.name}</td>
                    <td >{val.username}</td>
                    </tr>
                )
            })
        }
        </table>
        </>
    )
}

export default Api
