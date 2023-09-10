import React from 'react'

const ChatMessage = ({name , message}) => {
  return (
    <div className='p-2 flex shadow-sm' >
         <img
          className="h-9"
          src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
          alt="User"
        />

        <span className='p-1 font-semibold' >{name}</span>
        <span className='p-1 ml-2'  >{message}</span>
    </div>
  )
}

export default ChatMessage