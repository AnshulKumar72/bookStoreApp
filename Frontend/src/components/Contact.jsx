import React from 'react';

const Contact=()=>{

   return (
    <>
   <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              

              <h3 className="font-bold text-lg ">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  required
                />
                
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  required
                />
               
              </div>
              {/* Message */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <textarea name="message" placeholder="Enter your message" class="contact-inputs" className="" required></textarea>
                
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Send Message
                </button>
            
              </div>
            </form>
          </div>
        </div>
      </div>
   </>
   )
}

export default Contact