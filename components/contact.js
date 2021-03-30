//TODO: Stub out component 
//TODO: Build out component
//TODO: Style Component
//TODO: Responsive / mobile design
import emailjs from 'emailjs-com';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ol6rlgh","template_yzlq07b", e.target, 'user_ocg5Igvwokv15BeGXamZ5')
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

      <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
            <input type="text" className="form-control" placeholder="Name" name="name" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="email" className="form-control" placeholder="Email Address" name="email" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input type="text" className="form-control" placeholder="Subject" name="subject" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="btn btn-info" value="Send Message"></input>
          </div>
        </div>
      </form>

    </div>
  )
}