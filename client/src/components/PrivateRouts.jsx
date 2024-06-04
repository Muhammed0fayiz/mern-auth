import React from 'react'
import { Outlet,Navigate} from 'react-router-dom'

import { useSelector } from 'react-redux'

function PrivateRouts() {
    const {currentUser}=useSelector(state=>state.user)
  return (
    <div>
   currentUser?<Outlet/>:<Navigate to='/sign-in'/>
    </div>
  )
}

export default PrivateRouts
