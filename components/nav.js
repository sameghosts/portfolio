//TODO: continue to style nav component and update with good assets
// Base div
  // Icon (emoji stand in)
  // Links
  // More button


  export default function Nav(){
    return (
      // nav container
      <div id="nav_container" className="bg-purple-700 p-3 flex justify-between items-center"> 
        {/* svg logo h1 rn */}
        <div className="flex">
        <img src="https://cdn2.iconfinder.com/data/icons/free-line-halloween-icons/24/Ghost-256.png" width="50" className="p-1 bg-green-300 shadow-2xl rounded" alt="Logo"/>
        <h1 className="p-2 inline-block text-xl text-blue-400">S M F</h1>

        </div>
        {/* Links div */}
        <div className="flex items-center justify-between">
          {/* Links: Projects / About / Contact */}
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100 text-lg" href="#projects">Projects</a>
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100 text-lg" href="#">About</a>
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100 text-lg" href="#">Contact</a>
        </div>
        {/* More button */}
        <div className="flex items-center">
        <a className="p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" href="#">More</a>
        </div>
      </div>
    )
  }