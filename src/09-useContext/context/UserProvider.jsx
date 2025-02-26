import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 0,
//   name: 'Ernesto',
//   email: 'mernesto@gmail.com',

// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
