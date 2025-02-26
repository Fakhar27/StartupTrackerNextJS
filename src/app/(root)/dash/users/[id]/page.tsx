import React from 'react'

const userProfile = ({params}: {params: {id:string}}) => {
  return (
    <div>
      <h2>HELLO THERE USER {params.id}</h2>
    </div>
  )
}

export default userProfile
