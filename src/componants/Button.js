import React from 'react'

const Button = ({ text ,onClick}) => {
  return (
    <button className='btn btn-info' style={{backgroundColor: '#1F4690',color:'white'}} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button