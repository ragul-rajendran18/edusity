import React from 'react'
import './contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85faa4be-2d03-4ec9-b4fd-4db4e7903bef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda nobis dicta accusamus eum aperiam voluptatibus at dolor beatae ut voluptatem blanditiis perferendis vero numquam nihil doloremque, nam praesentium sequi?</p>
        <ul>
        <li> <img src={mail_icon} alt="" /> ragul18rs@gmail.cm</li>
        <li> <img src={phone_icon} alt="" /> +91 99408 77476</li>
        <li>  <img src= {location_icon} alt="" /> 77 SAJ nagar, cambridge<br/>MA 609203, united States</li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your mobile no' required/>
            <label>Write your Message here</label>
            <textarea name="message" rows='6' placeholder='enter a message' required></textarea>
            <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
