import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <h1>Please Login</h1>
  console.log(user);
  

  return (
   <div>
      <h1>The User is {user.username} and {user.password}</h1>
   </div>
  )
}

export default Profile