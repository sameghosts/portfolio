//TODO: build out nav componentf
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
        <img src="https://cdn2.iconfinder.com/data/icons/free-line-halloween-icons/24/Ghost-256.png" width="50" alt="Logo"/>
        <h1 className="p-2 inline-block text-xl text-blue-400">S M F</h1>

        </div>
        {/* Links div */}
        <div className="flex items-center justify-between">
          {/* Links: Projects / About / Contact */}
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100" href="#">Projects</a>
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100"href="#">About</a>
          <a className="inline-block px-8 text-purple-300 hover:text-indigo-100" href="#">Contact</a>
        </div>
        {/* More button */}
        <div className="flex items-center">
        <a className="p-4  bg-indigo-700 text-indigo-300 hover:bg-green-600 hover:text-green-200 rounded" href="#">More</a>
        </div>
      </div>
    )
  }