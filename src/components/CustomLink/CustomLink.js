import React from 'react'
import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
const CustomLink = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  const myStye = {
    textDecoration: match ? 'underline' : 'none',
    textDecorationThickness: match ? '3px' : 'none',
  }
  return (
    <div>
      <Link style={myStye} to={to} {...props}>
        {children}
      </Link>
      {match && ''}
    </div>
  )
}

export default CustomLink
