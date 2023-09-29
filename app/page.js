// "use client"
// import React, { useState } from 'react'
// import Header from './Component/Header'

// const page = () => {
//   const [num, setnum] = useState(10)
//   return (
//     <>
//     <Header num = {num}></Header>
//     </>
//   )
// }

// export default page

"use client"
import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

// Yaha par context use kiya hay
const page = () => {
  const user = useContext(MyContext)
  // console.log(user);
  return (
    <div>{user}</div>
  )
}

export default page