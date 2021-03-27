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
    <div id="Splash" className="p-2 flex flex-col bg-gray-400 items-center">
      {/* Name Splash Div */}
      <div className="flex justify-center items-center">
        {/* img logo eventually */}
        <img src="https://images.unsplash.com/photo-1568584477802-91bcf4a469da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" className="w-1/4 rounded mr-6"/>
        {/* first name */}
        <h1 className="p-2  text-green-400 text-9xl"> Sean </h1>
      </div>
        {/* Last Name */}
      <div>
        <h1 className="p-2 inline-block text-green-400 text-9xl"> Michael Feiner </h1>
      </div>
      {/* tagline div */}
      <div className="p-3 bg-gray-300 flex items-center rounded shadow-2xl">
        {/* tagline text */}
        <h3 className="text-xl text-center text-gray-800">I am a full stack developer, writer, and artist.
        <br></br>
        I love information architecture, web development ecosystems, and open source development.
        <br/>
        I am seeking an environment of learning with an opportunity focussed on growth. 
        </h3>
        {/* other stuff ? */}
      </div>
      {/* buttons div */}

    </div>
  )
}
