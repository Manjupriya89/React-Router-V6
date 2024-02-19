import React from 'react'
import { useLoaderData } from 'react-router-dom'

const title={
    fontSize: '2em',
    color: 'red',
    fontWeight: '500',
    paddingLeft:'20px',
    margin:'10px'
}

const position={
    fontSize:'1em',
    padding:'10px 0 5px 40px'
}

const Career = () => {
    const data = useLoaderData()
  return (
    <div>
        <label>Open positions</label>
        <p>Drop us a mail at <span style={{color:'yellow'}}>career@bootcamp.com. </span> We'll be happy to hear from you.</p>
        {data && data.map(item=>(
            <li style={{listStyle:'none'}} key={item.title}>
               <div style={title}>{item.title}</div> 
                <div style={position}>{item.position}</div>
                <div style={position}>{item.location}</div>
            </li>
            
        ))}
    </div>
  )
}

export default Career