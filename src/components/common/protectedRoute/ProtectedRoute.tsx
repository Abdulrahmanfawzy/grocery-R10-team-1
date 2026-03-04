import React, {  type ReactNode } from 'react'

interface ProtectedPaths{
    children: ReactNode;
}
function ProtectedRoute({children}: ProtectedPaths) {
  return (
    <div>{children}</div>
  )
}

export default ProtectedRoute