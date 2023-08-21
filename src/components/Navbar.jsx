import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Quickchat</span>
      <div className="user">
        <img src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
