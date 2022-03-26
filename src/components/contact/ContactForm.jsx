import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import send from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const ContactForm = () => {
  const form = useRef();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);

  const handleName = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setSenderPhone(e.target.value);
  };

  const handleMessage = (e) => {
    setSenderMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m65erzh",
        "template_3x0gz9o",
        {
          senderName,
          senderPhone,
          senderEmail,
          senderMessage,
        },
        "CZKC1r6auDp8kIoe0"
      )
      .then((response) => {
        setMessageSuccess(true);
      })
      .catch((err) => {
        if (err) {
          setMessageFailed(true);
        }
      });

    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
    setSenderPhone("");

    // console.log(senderName);
    // console.log(senderEmail);
    // console.log(senderMessage);
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div ref={form} className="lg:w-[40%] ">
      <form onSubmit={sendMail}>
        <input
          type="text"
          name="senderName"
          required
          value={senderName}
          onChange={handleName}
          placeholder="Name"
          className="outline-none border-[1px] border-gray-300 block p-2 w-full mb-5 placeholder:font-sans  text-md px-4 font-sans focus:border-[#3498db] transition ease-in"
        />
        <input
          type="tel"
          name="senderPhone"
          required
          value={senderPhone}
          onChange={handlePhone}
          placeholder="Phone Number"
          className="outline-none border-[1px] border-gray-300 block p-2 w-full mb-5 placeholder:font-sans  text-md px-4 font-sans focus:border-[#3498db] transition ease-in"
        />
        <input
          type="email"
          name="senderEmail"
          required
          value={senderEmail}
          onChange={handleEmail}
          placeholder="Email"
          className="outline-none border-[1px] border-gray-300 block p-2 w-full my-5 placeholder:font-sans  text-md px-4 font-sans focus:border-[#3498db] transition ease-in"
        />
        <textarea
          name="senderMessage"
          required
          value={senderMessage}
          onChange={handleMessage}
          cols="30"
          rows="4"
          placeholder="Message"
          className="outline-none border-[1px] border-gray-300 block p-2 w-full my-5 placeholder:font-sans  text-md px-4 font-sans focus:border-[#3498db] transition ease-in"
        ></textarea>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="px-[30px] py-[10px] rounded-[55px] bg-[#3498db] text-white border-2 "
            onClick={handleClick({
              vertical: "bottom",
              horizontal: "right",
            })}
          >
            <h1 className="font-sans text-white">Send Message</h1>
          </button>
        </div>
      </form>

      {messageFailed && (
        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert severity="error">Error!</Alert>
        </Snackbar>
      )}

      {messageSuccess && (
        <Snackbar
          autoHideDuration={6000}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert severity="success">Success!</Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ContactForm;
