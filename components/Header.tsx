import React from 'react'

const Header = ({type,title,user,subTitle}:HeaderProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-24 lg:text-30 font-semibold text-gray-900'>
        {title} {" "}
      {type === "greting" && (
        <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">{user}</span>

      )}
      </h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Header
