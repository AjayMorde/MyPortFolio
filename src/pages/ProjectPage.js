import React from 'react'
import Projects from '../components/Projects/index'
import { useState} from "react";
import ProjectDetails from '../components/ProjectDetails/index'
const ProjectPage = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div>
      <Projects openModal={openModal} setOpenModal={setOpenModal} ></Projects>
      {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
    </div>
  )
}

export default ProjectPage
