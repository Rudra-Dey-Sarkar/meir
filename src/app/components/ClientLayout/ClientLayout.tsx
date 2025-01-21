import React from 'react'

function ClientLayout({children}: { children: React.ReactNode }) {
  return (
    <div className='w-full h-full bg-black'>
        {children}
    </div>
  )
}

export default ClientLayout