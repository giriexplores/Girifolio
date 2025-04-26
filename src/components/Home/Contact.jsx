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
    <div ref={contactRef} className="w-full bg-slate-900">
      <div className="mx-auto flex w-10/12 max-w-[1920px] flex-col items-center gap-8 p-4 py-10 text-white">
        <div className="flex flex-col gap-10">
          <div className="hidden flex-col items-center justify-center gap-2 md:flex">
            <LuMouse className="text-4xl text-emerald-500" />
            <span className="h-5 border-l-2 border-dotted"></span>
            <span className="-mt-1 h-1 w-1 rounded-full bg-white"></span>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:mt-2">
            <h2 className="text-center text-6xl text-emerald-500">Contact</h2>
            <div className="-mt-3 flex items-center gap-0">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="h-[2px] w-56 rounded-full bg-emerald-500"></span>
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-center tracking-wider">
              I'm currently available for freelance work.
            </p>
          </div>
        </div>
        <h2 className="mt-10 rounded-ss-[2rem] rounded-ee-[2rem] border-[2px] border-emerald-500 px-8 py-2 text-center text-2xl text-emerald-500 md:text-3xl">
          Send me a message
        </h2>
        <form
          className="mt-10 flex w-full flex-col items-center gap-16"
          onSubmit={submitHandler}
        >
          <div className="flex w-full flex-wrap justify-between gap-16">
            <div className="flex flex-1 flex-col justify-start text-emerald-500">
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
                className="mt-3 rounded-lg border-b-2 border-emerald-500 bg-transparent p-2 text-lg accent-emerald-500 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-col justify-start text-emerald-500">
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
                className="mt-3 rounded-lg border-b-2 border-emerald-500 bg-transparent p-2 text-lg accent-emerald-500 outline-none"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-start text-emerald-500">
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
              className="mt-3 rounded-lg border-b-2 border-emerald-500 bg-transparent p-2 text-lg accent-emerald-500 outline-none"
            />
          </div>
          <button
            disabled={
              !inputs.fullName ||
              !inputs.emailId ||
              !inputs.message ||
              sendText === "Sent Successfully"
            }
            className="inline-flex items-center justify-center gap-3 rounded-xl border-none bg-emerald-500 px-4 py-2 font-semibold text-black outline-none hover:bg-emerald-400 active:scale-95 disabled:bg-emerald-500/40"
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
