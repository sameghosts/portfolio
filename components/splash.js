//TODO: Stub out component ##DONE
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design

//Splash / Landing 
// Logo Image 
// Name Big
// large-ish tagline 

export default function Splash(){
  return (
    // Splash container
    <div id="Splash" className="p-2 flex flex-col bg-gray-400 items-center w-auto">
      {/* Name Splash Div */}
      <div className="flex flex-col sm:flex-row justify-center items-center ">
        {/* img logo eventually - ear into ear morph gif 
        <img src="https://images.unsplash.com/photo-1568584477802-91bcf4a469da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" className="w-2/3 sm:w-1/6 sm:h-36 rounded-full sm:mr-6 shadow-2xl"/> */}
        {/* first name */}
        <h1 className="p-2 sm:text-9xl text-6xl font-black"> 👻</h1>
        <h1 className="p-2  text-green-400 sm:text-9xl text-6xl font-black"> Sean </h1>
      </div>
        {/* Last Name */}
      <div className="flex flex-col text-center sm:flex-row">
        <h1 className="p-2 text-green-400 sm:text-9xl text-6xl font-black sm:mr-2"> Michael </h1>
        <h1 className="p-2 text-green-400 sm:text-9xl text-6xl font-black sm:ml-2"> Feiner  </h1>
        <h1 className="p-2 sm:text-9xl text-6xl font-black sm:ml-2">  🌽 </h1>
      </div>
      {/* tagline div */}
      <div className="p-3 bg-gray-300 flex items-center rounded shadow-2xl">
        {/* tagline text */}
        <h3 className="text-xl text-center text-gray-800 font-mono">I am a full stack developer, writer, and artist.
        <br></br>
        I love information architecture, paradigms and framework ecosystems, and open-source development.
        <br/>
        I am seeking an environment of learning with an opportunity focused on growth. 
        </h3>
        {/* other stuff ? */}
      </div>
      {/* buttons div */}
      <div className="p-3 w-full flex justify-evenly items-stretch">
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://drive.google.com/file/d/1f1mh2Jgczfy_o_WEpZ0nn3W5x5Qgbbcj/view?usp=sharing">Resume</a>
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://www.linkedin.com/in/seanmichael-feiner/">LinkedIn</a>
      <a className="text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://github.com/sameghosts">GitHub</a>
      </div>
    </div>
  )
}
