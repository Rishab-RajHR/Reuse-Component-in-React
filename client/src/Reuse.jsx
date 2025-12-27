import React from 'react'
import Employee from './Employee'

const Reuse = () => {
      const employeeInfo = [
          {name: "Alex", email: "alex@gmail.com", contact: 12543},
          { name: "John", email: "john.doe@gmail.com", contact: 98452 },
          { name: "Emma", email: "emma.smith@gmail.com", contact: 76321 },
          { name: "Sophia", email: "sophia.w@gmail.com", contact: 45129 }
         ]
  return (
    <>
      <h2>Resuse component in React JS</h2>
      {
           employeeInfo.map((item, i) =>
              <Employee data={item}/> 
          )
      }
    </>
  )
}

export default Reuse
