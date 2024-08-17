import React from 'react'

const Button = ({children, icon}) => {
  return (
    <>
    <button className='bg-black text-white text-sm rounded-2xl px-9 py-[18px] flex justify-center items-center gap-4'>{children}{icon}</button>
    </>
  )
}

export default Button