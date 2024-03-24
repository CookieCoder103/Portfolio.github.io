import "./ContactMe.css";

function ContactMe() {
  return (
    <>
      <div className="contactSection" id="ContactMe">
        <h3>Contact Me</h3>
        <div className="anotherContainer">
          <div className="formInfo">
            <p>
              Please fillout the following to form to contact me regarding any
              specific requirements you have for your special day!
            </p>
            <p>Form:</p>
          </div>
          <div className="inputContainer">
            <input className="nameInput" type="text" placeholder="Name" />
            <input className="emailInput" type="email" placeholder="Email" />
            <textarea
              className="descriptionInput"
              type="text"
              placeholder="What type of wedding are you having?"
            ></textarea>
            <button className="send" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactMe;
