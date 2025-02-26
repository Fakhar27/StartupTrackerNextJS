import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <div>
       <h2>THIS IS USERS PAGE SELECT YOUR USERS</h2>
       <ul>
            <li>
                <Link href="/dash/users/1">User 1</Link>
            </li>
            <li>
                <Link href="/dash/users/2">User 2</Link>
            </li>
            <li>
                <Link href="/dash/users/3">User 3</Link>
            </li>
            <li>
                <Link href="/dash/users/4">User 4</Link>
            </li>
       </ul>
    </div>
  )
}

export default Users
