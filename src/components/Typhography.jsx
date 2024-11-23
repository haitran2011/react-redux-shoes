import React from 'react'

function Typhography({ children, component: Component = 'div', className, onClick }) {
  return (
    <Component className={className} onClick={onClick}>{children}</Component>
  )
}

export default Typhography