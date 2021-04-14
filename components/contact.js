//TODO: Stub out component 
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ol6rlgh", "template_yzlq07b", e.target, 'user_ocg5Igvwokv15BeGXamZ5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }


  return (
    <div id="Contact" className="p-2 flex flex-col bg-gray-400 items-center">
      <h1 className="p-2 my-5 text-7xl text-blue-800 font-bold"> Contact Me! </h1>

      <form className="flex p-4 m-2 flex-col justify-around" onSubmit={sendEmail}>

        <input type="text" className="p-1 mt-3 mb-3 text-lg rounded bg-green-200 text-purple-400" placeholder="Name" name="name" />

        <input type="email" className="p-1 mt-3 mb-3 text-lg rounded bg-green-200  text-purple-400" placeholder="Email Address" name="email" />

        <input type="text" className="p-1 mt-3 mb-3 text-lg rounded bg-green-200 text-purple-400" placeholder="Subject" name="subject" />

        <textarea className="p-1 mt-3 mb-3 text-lg rounded bg-green-200 text-purple-400" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>

        <input type="submit" className="mt-3 mb-3 text-xl inline-block p-4  bg-indigo-700 hover:bg-green-600 text-indigo-300  hover:text-green-200 shadow-2xl rounded transition ease-in duration-150" value="Send Message"></input>

      </form>

    </div>
  )
}