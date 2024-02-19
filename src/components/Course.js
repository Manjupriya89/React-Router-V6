import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const card = {
  border : '1px solid black',
  backgroundColor:'grey',
  height :'150px',
  padding:'20px',
  marginTop:'10px'
}
const cardTitle= {
  fontSize:'1em',
  fontWeight:'700',
  color:'black',
  marginBottom:'10px'
}
const cardItem = {
  marginTop:'5px',
  marginLeft : '30px'
}
const Course = () => {
   const courseData = useLoaderData()
  return (
    <div>
        {courseData && courseData.map(item =>(
          <div style={card}>
          <div style={cardTitle}>{item.courseName}</div>
          <div>{item.courseDetails.description}</div>
          {item.courseDetails.topics?.map(item =>(
             <li style={cardItem}>
              {item}
             </li>
          ))}
         
          </div>
        ))}
    </div>
  )
}

export default Course