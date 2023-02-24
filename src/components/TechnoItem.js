import React from 'react'

export default function TechnoItem(props) {
      const { techno, handleDeleteTechno } = props

  return (
    
        <div key={techno.technoid}>
            <h2>{techno.technoname}</h2>
            <h3>Category</h3>
            <p>{techno.technocategory}</p>
            <h3>Description</h3>
            <p>{techno.technodescription}</p>
            <div>
                <button style={{backgroundColor:'red',color: 'white',}} onClick={() => handleDeleteTechno(techno.technoid)}>Delete</button>
            </div>
        </div>
       
  )
}
