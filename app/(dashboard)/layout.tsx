import React from 'react'

export default function Dashboardlayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Dashboard layout
      <div>
        {children}
      </div>
    </div>
  )
}
