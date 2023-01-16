import React from 'react'

function Input({onChange, onBlur}) {
  return (
    <input onChange={onChange} onBlur={onBlur} placeholder='search'/>
  )
}

export default Input