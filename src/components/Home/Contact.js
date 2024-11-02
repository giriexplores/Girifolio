import React, { useState } from "react";
import { LuMouse } from "react-icons/lu";
import { GrSend } from "react-icons/gr";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact({ contactRef }) {
  const [inputs, setInputs] = useState({
    fullName: "",
    emailId: "",
    message: "",
  });
  const [sendText, setSendText] = useState("Send message");
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputs.fullName || !inputs.emailId || !inputs.message) {
      toast.info("Please fill all the fields.");
      return;
    }
    setSendText("Sending...");
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUB_KEY = process.env.REACT_APP_PUB_KEY;
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, inputs, PUB_KEY)
      .then(() => {
        setSendText("Sent Successfully");
        toast.success("Message send successfully");
        setInputs({ fullName: "", emailId: "", message: "" });
      })
      .catch((error) => {
        toast.error("Message failed, Try E-mail, WhatsApp, or LinkedIn.");
        setSendText("Send message");
        console.error(error);
      });
  };

  return (
    <div ref={contactRef} className="w-full  bg-slate-900">
      <div className="flex flex-col gap-8 items-center w-10/12 mx-auto p-4 py-20 text-white max-w-[1920px] ">
        <div className="flex flex-col gap-10">
          <div className="flex-col gap-2 items-center hidden md:flex justify-center">
            <LuMouse className="text-4xl text-emerald-500" />
            <span className="h-5 border-l-2 border-dotted"></span>
            <span className="h-1 w-1 rounded-full bg-white -mt-1"></span>
          </div>
          <div className="md:mt-2 flex flex-col items-center justify-center gap-4">
            <h2 className="text-6xl text-emerald-500 text-center">Contact</h2>
            <div className="flex gap-0 -mt-3 items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="w-56 h-[2px] rounded-full bg-emerald-500"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="tracking-wider text-center">
              I'm currently available for freelance work.
            </p>
          </div>
        </div>
        <h2 className="mt-10 border-[2px] px-8 py-2 rounded-ss-[2rem] rounded-ee-[2rem] text-2xl md:text-3xl text-emerald-500 border-emerald-500 text-center">
          Send me a message
        </h2>
        <form
          className="w-full mt-10 items-center flex flex-col gap-16"
          onSubmit={submitHandler}
        >
          <div className="flex justify-between w-full flex-wrap gap-16">
            <div className="flex flex-col justify-start text-emerald-500 flex-1">
              <label htmlFor="name">
                Your name <sup className="text-red-500">*</sup>
              </label>
              <input
                onChange={changeHandler}
                type="text"
                id="name"
                value={inputs?.fullName}
                required
                placeholder="Full Name"
                name="fullName"
                className="accent-emerald-500 bg-transparent outline-none border-b-2 p-2 text-lg border-emerald-500 mt-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start text-emerald-500 flex-1">
              <label htmlFor="emailId">
                Your email <sup className="text-red-500">*</sup>
              </label>
              <input
                onChange={changeHandler}
                type="email"
                id="emailId"
                value={inputs?.emailId}
                required
                placeholder="someone@example.com"
                name="emailId"
                className="accent-emerald-500 bg-transparent outline-none border-b-2 p-2 text-lg border-emerald-500 mt-3 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start text-emerald-500 w-full">
            <label htmlFor="msg">
              Your message <sup className="text-red-500">*</sup>
            </label>
            <textarea
              onChange={changeHandler}
              id="msg"
              name="message"
              required
              value={inputs?.message}
              placeholder="Write me something..."
              className=" accent-emerald-500 bg-transparent outline-none border-b-2 p-2 text-lg border-emerald-500 mt-3 rounded-lg"
            />
          </div>
          <button
            disabled={
              !inputs.fullName ||
              !inputs.emailId ||
              !inputs.message ||
              sendText === "Sent Successfully"
            }
            className="border-none outline-none inline-flex gap-3 items-center justify-center bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black font-semibold px-4 py-2 rounded-xl disabled:bg-emerald-500/40"
          >
            {sendText} {sendText === "Send message" && <GrSend />}{" "}
            {sendText === "Sent Successfully" && (
              <IoCheckmarkCircleOutline className="text-xl" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
