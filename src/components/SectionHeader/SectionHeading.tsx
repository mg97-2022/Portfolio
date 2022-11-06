import React from 'react'
import classes from './SectionHeading.module.css'

const SectionHeading:React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={classes.heading}>
      {children}
    </div>
  )
}

export default SectionHeading
