import React from 'react'

interface IProps {
  className: string
}


export const Page: React.FC<IProps> = ({children, className}) => {
  return (
    <div className={`mt-12 p-8 bg-red-500 rounded shadow-xl ${className ? className : ''}`}>
      {children}
    </div>
  )
}
