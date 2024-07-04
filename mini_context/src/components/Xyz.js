import React from 'react'

const Xyz = ({name="Hardik Pandya",team="MI"}) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Team: {team}</h2>
    </div>
  )
}

// Xyz.defaultProps={ 
//     name: "Virat Kohli",
//     team:"RCB"
// }

export default Xyz
