import React from 'react'




const Filters = ({handleSubmit, variables, setVariables}) => {

    const handleGenderChange = (e) => {
        setVariables({ ...variables, gender: e.currentTarget.value })
        handleSubmit()
      }
      const handleSpeciesChange = (e) => {
        setVariables({ ...variables, species: e.currentTarget.value })
        handleSubmit()
      }
      const handleStatusChange = (e) => {
        setVariables({ ...variables, status: e.currentTarget.value })
        handleSubmit()
      }
    
  return (
        <div className='side-bar'>
      <div className='data-selects'>
        <h2>Filters</h2>
        <label className='input-gender' htmlFor="gender">Gender</label>
        <select onChange={handleGenderChange} name="gender" id="gender">
          <option value="">All</option>
          <option value="Male">MALE</option>
          <option value="Female">FEMALE</option>
        </select>
        <label className='input-species' htmlFor="species">SPECIES</label>
        <select onChange={handleSpeciesChange} name="species" id="species" >
          <option value="">All</option>
          <option value="Human">HUMAN</option>
          <option value="Alien">ALIEN</option>
        </select>
        <label className='input-status' htmlFor="status">STATUS</label>
        <select onChange={handleStatusChange} name="status" id="status" >
          <option value="">All</option>
          <option value="Alive">ALIVE</option>
          <option value="Dead">DEAD</option>
        </select>
      </div>
    </div>
  )
}

export default Filters