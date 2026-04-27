import { useState } from "react";
import contactImg from "../../Assets/contact.svg";
import "./Contact.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState('Enviar');
// eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = () => {
    // setButtonText("Enviando...");
    setStatus({ success: true, message: 'Mensaje enviado con éxito' });
  };

  return (
    <section className="contact" id="contact">
      <div>
        <TrackVisibility>
          <h2>Pongase en Contacto</h2>
          <div className="">
            <img className="animate__animated animate__zoomIn" src={contactImg} alt="Contact Us" />

            <form action="https://formsubmit.co/sebaresek.dev@gmail.com" method="POST" onSubmit={handleSubmit}>

              <input type="text" name="firstName" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} placeholder="Nombre" />

              <input type="text" name="lastName" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} placeholder="Apellido" />

              <input type="email" name="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} placeholder="Email" />

              <input type="tel" name="phone" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} placeholder="Teléfono" />

              <textarea name="message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} placeholder="Mensaje" />

              {/* para redirigir a la pagina una vez apretado el send */}
              {/* <input type="hidden" name="_next" value='' />  */}

              {/* para que no aparezca el captcha  */}
              <input type="hidden" name="_captcha" value='false'/>

              <button type="submit">
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path></svg>
                    </div>
                </div> 
                <span> Enviar </span>
              </button>

            </form>
          </div>
        </TrackVisibility>
      </div>
    </section>
  );
};
