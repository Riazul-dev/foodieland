import React from 'react'

const TitleSection = ({children}) => {
  return (
    <>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold py-1'>{children}</h3>
    </>
  )
}

export default TitleSection