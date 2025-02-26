import React from 'react'
import Link from 'next/link'

const dash = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/dash/users">GO TO USERS PAGE</Link>
            </li>
            <li>
                <Link href="/dash/accounts">GO TO ACCOUNTS PAGE</Link>
            </li>
        </ul>
    </div>
  )
}

export default dash
