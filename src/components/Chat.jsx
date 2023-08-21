import React from 'react'
import Cam from '../assets/cam.png';
import More from '../assets/more.png'
import Add from '../assets/add.png';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcon">
            <img src={Cam} alt="" />
            <img src={Add} alt="" />
            <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
