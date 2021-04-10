//TODO: Stub Out Project Card Component
//TODO: Replace for props 
//TODO: Check with different render path

export default function ProjectCard(props){
  let allTechImg = props.techLogos.map(image => (<img src={image} className="inline-block p-2 w-16 mr-4 " />
  ))
  return(
    <div className="bg-blue-500 p-2 flex flex-col sm:flex-row items-center rounded shadow-lg hover:shadow-2xl">
    {/* text container */}
    <div className="bg-blue-300 text-center justify-around m-3 rounded-xl shadow-inner">
      {/* proj title */}
      <p className="p-4 text-blue-800 text-4xl font-extrabold"> {props.title}</p>
      {/* project description */}
      <p className="p-2 font-semibold text-blue-600"> {props.descrip}</p>
      {/* project links */}
      <div className="flex justify-between py-4">
      <a href={props.targGithub} target="_blank" className="rounded-full m-auto mt-2 mb-3 py-2 px-6 bg-red-600 hover:bg-red-100 text-red-300 hover:text-red-600 sm:text-2xl font-extrabold shadow-xl transition ease-in duration-150">
        GitHub
      </a>
      <a href={props.targDemo} target="_blank" className="rounded-full m-auto mt-2 mb-3 py-2 px-6 bg-red-600 hover:bg-red-100 text-red-300 hover:text-red-600 sm:text-2xl font-extrabold shadow-xl transition ease-in duration-150">
        Live Demo
      </a>
      </div>

      {/* Img Icons */}
      <div className="flex flex-wrap justify-around items-center p-4">
        {allTechImg}
      </div>
      
    </div>
    {/* Img container */}
    <div className="p-1 flex justify-around items-center m-3">
      
      <img src="/projpics/CT1.png" alt="project image" className="" />
      

    </div>

  </div>
  )
}