//TODO: Stub out component 
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design

// Name Title 
// Bio
// Resume info
// Tech Stack and Icons
// Buttons for : Resume, LinkedIn, Email, Github

//TODO: Wire nav button for about

export default function About(){
  return(

  <div id="About" className="p-2 flex flex-col bg-green-200 items-center">
    {/* Section Title */}
    <h1 className="text-purple-800 font text-7xl font-extrabold p-2">About</h1>
    {/* Biography */}
    <p className="p-4 font-bold mx-10 text-gray-600">
    I am a full stack developer and software engineer based in Brooklyn, New York. I have also served outside the tech industry as an educator, writer, curator, and artist with a passion for emergent art and music technologies and the cultures and platforms they generate. As a digital and performative creative my expertise is developed through research, dynamic and agile problem solving, and project development and management between the academic, music, nightlife, and tech industries. I have 10 years of experience curating and producing digital, performance, and mixed-media installation art. I am passionate about music cultures and the way in which technology and distribution platforms intersect with particular communities. I am currently interested in modern web full stack application frameworks including descendants of the MEAN/MERN stack architecture. I also am interested in experimentation in Python and information architecture using GraphQL. While I enjoy full stack engineering, I am most excited about data: its architecture, management, and how it can serve clients and users.
    </p>
    {/* Education / Training Div */}
    <div> 
    {/* Add tiny divs in here with education */}
    </div>
    {/* Buttons */}
    <div className="p-6 w-full flex flex-wrap justify-around content-around">
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://drive.google.com/file/d/1f1mh2Jgczfy_o_WEpZ0nn3W5x5Qgbbcj/view?usp=sharing">Resume</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://www.linkedin.com/in/seanmichael-feiner/">LinkedIn</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" target="_blank" href="https://github.com/sameghosts">GitHub</a>
      <a className="text-xl inline-block m-1 p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" href="mailto:seanfeiner.dev@gmail.com">Email</a>
      </div>
      {/* Tech Stack images TODO: Add images */}
      <div className="flex flex-col flex-wrap font-mono">
        <p className="text-lg font-semibold  text-gray-700">
        Full-Stack Web Developer / Software engineer with experience in the following:
        </p>
        <ul className="list-disc list-inside text-gray-600 font-semibold px-6">
          <li>
            JavaScript - React, Vue, Next, Node, Express, EJS
          </li>
          <li>

        SQL - Postgres, Sequelize ORM
          </li>
          <li>
        NoSQL - Mongo.db, Mongoose ODM, GraphQL, Apollo
          </li>
          <li>
        Python - OOP, Flask, SQAlchemy
          </li>
          <li>

        Version Control and Team Development - Github, Git
          </li>
        </ul>

      </div>
  </div>
  )
}