import React from 'react'

function Typhography({ children, component: Component = 'div', className }) {
  return (
    <Component className={className}>{children}</Component>
  )
}

export default Typhography