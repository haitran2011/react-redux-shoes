import React from 'react'

function Button({ onClick, text , className, icon }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {text && text}
      {icon && (
        <img src={icon} />
      )}
    </button>
  )
}

export default Button