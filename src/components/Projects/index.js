import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          
I have experience working on a diverse range of projects, spanning both frontend and backend development. Here are some examples of my work
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Backend' ?
            <ToggleButton active value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
            :
            <ToggleButton value="Backend" onClick={() => setToggle('Backend')}>Backend</ToggleButton>
          }
          <Divider />
          {toggle === 'Frontend' ?
            <ToggleButton active value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
            :
            <ToggleButton value="Frontend" onClick={() => setToggle('Frontend')}>Frontend</ToggleButton>
          }
          <Divider />
          {toggle === 'Full-Stack' ?
            <ToggleButton active value="Full-Stack" onClick={() => setToggle('Full-Stack')}>Full-Stack</ToggleButton>
            :
            <ToggleButton value="Full-Stack" onClick={() => setToggle('Full-Stack')}>Full-Stack</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project,index) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={index}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects