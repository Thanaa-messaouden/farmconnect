import React from 'react'

const Navbar = () => {

  return (
    <div className='navbar'>
      <span className="logo">FarmConnect</span>
      <div className="user">
        <img alt="" />
        <span>Name</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar;