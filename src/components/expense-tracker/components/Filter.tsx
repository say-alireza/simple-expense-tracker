  import React from 'react'
import categories from '../categories';
  interface Props 
  {
    onSlelectCategory :(category:string) => void ;
  }
  const Filter = ({ onSlelectCategory }:Props) => {
    return (
      <select name="" id="" className="form-select" onChange={(event) =>  onSlelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
      </select>
    
    )
  }
  
  export default Filter