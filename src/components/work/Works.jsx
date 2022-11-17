import React from 'react'
import { projectData } from './Data'
import './work.css'
import WorkItems from './WorkItems'

const Works = () => {
  return (
    <div className="work__container container grid">
      {projectData.map(item => <WorkItems item={item}/>)}
    </div>
  )
}

export default Works