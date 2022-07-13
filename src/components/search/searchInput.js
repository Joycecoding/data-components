import React, { useRef, useState } from 'react'
import "../../App.css"

const SearchInput = ({handleSubmit, variables, setVariables}) => {

  const inputRef = useRef()

  

  const onSubmit = (e) => {
    e.preventDefault()
    setVariables({...variables, name: inputRef.current.value})
    handleSubmit()
  }

  return (
    <div>
       
<form onSubmit={onSubmit}
     className="form-inline">
        <input ref={inputRef}
          type="search"
          placeholder='search by name'
           className="form-control"
        />
        <button
          type="submit"
          className="btn-primary"
        >
          Search
        </button>
    </form>
     </div>
  )
   
    
}

export default SearchInput