import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgColor py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600">We would love to hear from you. Feel free to reach out with any inquiries!</p>

        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <p className="mt-2 text-gray-700">
            <strong>Email:</strong> contact@example.com
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Address:</strong> 123 Main St, Cityville, Country
          </p>
        </div>
        
        <div className="text-left mt-8">
          <h2 className="text-xl font-semibold text-gray-800">Send Us a Message</h2>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-btnAndTxt text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
