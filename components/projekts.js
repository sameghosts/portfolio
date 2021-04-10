// TODO: Stub and transfer out project container component
//TODO: import and map the project component into projects
import projInfo from '../data/projInfo';
import ProjectCard from '../components/projcard';
// Projects
// Create project card initially inside for p3
// Create project data
// Create project card sub component
// Map component with props
// Style 
// Mobile responsive
// Img gifs or carousels

export default function Projekts(){
  let projects = projInfo.map(project =>(
    <ProjectCard
      key={project.id}
      title={project.proj_title}
      descrip={project.proj_description}
      targGithub={project.target_github}
      targDemo={project.target_demo}
      techLogos={project.tech_logos}
      img={project.img}
      imgAlt={project.imgAlt}
    />
  ))
  return (
    <div id="projects" className=" w-screen flex flex-col text-center bg-purple-300 p-6">
      {/* Projects title */}
      <h1 className="p-2 my-5 text-7xl text-blue-800 font-bold"> Projects </h1>
      {/* Project card divs */}
      {projects}
    </div>
  )
}