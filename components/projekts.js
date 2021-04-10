// TODO: Stub and transfer out project container component
//TODO: import and map the project component into projects

// Projects
// Create project card initially inside for p3
// Create project data
// Create project card sub component
// Map component with props
// Style 
// Mobile responsive
// Img gifs or carousels

export default function Projects(){
  return (
    <div id="projects" className=" w-screen flex flex-col text-center bg-purple-300 p-6">
      {/* Project title */}
      <h1 className="p-2 my-5 text-7xl text-blue-800 font-bold"> Projects </h1>
      {/* Project card div */}
      <div className="bg-blue-500 p-2 flex flex-col sm:flex-row items-center rounded shadow-lg hover:shadow-2xl">
        {/* text container */}
        <div className="bg-blue-300 text-center justify-around m-3 rounded-xl shadow-inner">
          {/* proj title */}
          <p className="p-4 text-blue-800 text-4xl font-extrabold"> ChiknTindr</p>
          {/* project description */}
          <p className="p-2 font-semibold text-blue-600"> Restaurant match game for friends built using the MERN Stack and Yelp API. Collaborative team design and implementation. I was the back-end lead who designed the information architecture and ensured our database and server met the needs and logic for the client. </p>
          {/* project links */}
          <div className="flex justify-between py-4">
          <a href="https://github.com/sameghosts/ChiknTindr-Server" target="_blank" className="rounded-full m-auto mt-2 mb-3 py-2 px-6 bg-red-600 hover:bg-red-100 text-red-300 hover:text-red-600 sm:text-2xl font-extrabold shadow-xl transition ease-in duration-150">
            GitHub
          </a>
          <a href="https://modest-visvesvaraya-3148b8.netlify.app/" target="_blank" className="rounded-full m-auto mt-2 mb-3 py-2 px-6 bg-red-600 hover:bg-red-100 text-red-300 hover:text-red-600 sm:text-2xl font-extrabold shadow-xl transition ease-in duration-150">
            Live Demo
          </a>
          </div>

          {/* Img Icons */}
          <div className="flex flex-wrap justify-around items-center p-4">
            <img src="/logos/mongodb-ar21.svg" className="inline-block w-36 mr-4 " />
            <img src="/logos/express.svg" className="inline-block p-2 w-16 mr-4 " />
            <img src="/logos/react.svg" className="inline-block w-16 mr-4 " />
            <img src="/logos/nodejs-icon.svg" className="inline-block w-16 mr-4" />
          </div>
        </div>
        {/* Img container */}
        <div className="p-1 flex justify-around items-center m-3">
          
          <img src="/projpics/CT1.png" alt="project image" className="" />
          

        </div>

      </div>
    </div>
  )
}