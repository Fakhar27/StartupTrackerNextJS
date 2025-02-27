import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <div className='flex justify-between items-center'>
            <Link href="/">
                DECTOR
            </Link>
        </div>
    </div>
  )
}

export default Navbar
