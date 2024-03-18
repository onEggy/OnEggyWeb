import React, { useState } from "react";
import Headline from "../components/headline";
import Toast from "@/utils/toast";

const contactUs = () => {
  const title = "Contact Us";
  const desc = "Let's talk about your digital services requirements.";

  const [selectedOption, setSelectedOption] = useState("sayHi");
  const [toast, settoast] = useState(false)
  const [toastMsg, settoastMsg] = useState({ type: '', message: '' })

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      fetch('https://formsubmit.co/ajax/ask@oneggy.com', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _subject: selectedOption + " " + "OnEggy Contact WebPage Submission", ...formData })
      }).then(res => {
        settoast(true)
        settoastMsg({
          message: 'Request sent. Will contact You shortly..!',
          type: 'success'
        })


        setTimeout(() => {
          settoast(false)
          setFormData({
            name: "",
            email: "",
            mobileNumber: "",
            message: "",
          })
        }, 2000);



      }).catch(err => {
        console.log('error is', err)

        settoast(true)
        settoastMsg({
          message: 'server error, Please try again.',
          type: 'error'
        })

        setTimeout(() => {
          settoast(false)
        }, 2000);


      })

    } catch (error) {
      console.log('error is', error)
    }
  };

  return (
    <div id='contactUs' className="px-4 sm:px-0">

      <Headline title={title} desc={desc} titleCss={'md:font-bold md:text-4xl'} descCss={'md:w-[18rem] mt-7 md:ml-16'} />
      {/* <div className="sm:mt-20 mt-10 bg-offWhite p-14 rounded-3xl flex relative overflow-hidden"> */}
      <div className="sm:mt-20 mt-10 bg-offWhite p-6 sm:p-16  rounded-3xl flex relative overflow-hidden">
        <div className="sm:w-7/12   sm:p-10 w-full">
          <div className="flex justify-center sm:justify-start items-center space-x-4 mb-8">
            <label className="flex">
              <input
                type="radio"
                value="sayHi"
                checked={selectedOption === "sayHi"}
                onChange={handleOptionChange}
                className="mr-2 w-6 h-6"
              />
              <div>Say Hi</div>
            </label>
            <label className="flex">
              <input
                type="radio"
                value="getQuote"
                checked={selectedOption === "getQuote"}
                onChange={handleOptionChange}
                className="mr-2 ml-8 sm:ml-0 w-6 h-6"
              />
              <div>Get a Qoute</div>
            </label>
          </div>
          <form className="sm:w-10/12" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Mobile Number*
              </label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                minLength={10}
                maxLength={10}
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                required
              />
            </div>
            <div className="sm:mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 border-black"
                rows="4"
                required
              />
            </div>
            <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl w-full hidden sm:block"

            >
              Send Message
            </button>

            {toast && <Toast message={toastMsg.message} type={toastMsg.type} />}

          </form>
        </div>
        <div className="hidden sm:block">
          <img
            src="/home/contactUs/Illustration1.svg"
            alt="illustraion"
            // width={"494px"}
            // height={'394px'}
            className="absolute -right-[300px] top-[13px]"
          // className="scale-125 translate-y-14"  
          />
        </div>
      </div>
      <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl w-full sm:relative sm:hidden"

      >
        Send Message
      </button>


    </div>
  );
};

export default contactUs;
