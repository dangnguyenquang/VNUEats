import React from 'react'
import '../../../styles/artical.css'

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-[1000px] mx-auto py-[100px]">{children}</div>
}

export default layout
