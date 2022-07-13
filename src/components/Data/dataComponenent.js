import React, { Fragment, useEffect, useRef, useState } from 'react'
import "../../App.css"

const DataComponenent = ({ data, variables, setVariables, handleSubmit}) => {
  const [dateList, setDateList] = useState([])

  useEffect(() => {
    data.forEach((character) => {
      const date = (new Date(character.created).toLocaleDateString())
      if (dateList.includes(date)) return
      setDateList([...dateList, date])
    })
  }, [data])


  return (
    <div className='data-container'>
      {
        dateList.map((date, dateIndex) => (
          <div className='data-components' key={dateIndex}>
            <div className='date'>
            <h2>{date}</h2>
            </div>
             {data.map((character) => ( 
                new Date(character.created).toLocaleDateString() === date && 
               <div key={character.id} className='data-component'>
                <img className='data-image' src={character.image} alt='' />
                <p className='data-name'>Name: {character.name}</p>
                <p className='data-gender'>Gender: {character.gender}</p>
                <p className='data-status'>Status: {character.status}</p>
                <p className='data-species'>Species: {character.species}</p>
              </div>
           ))} 
          </div>
        ))
      }

    
   joyce </div>
  )
}

export default DataComponenent;