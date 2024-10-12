import React from "react";

function Testimonial() {
  return (
    <div className="bg-gray-900 py-16 px-4 rounded-t-xl">
      <h2 className="text-4xl  max-w-sm text-left font-bold text-white ml-36 mb-10">
        Let’s hear some feedbacks from our valuable users
      </h2>
      <div className="flex justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Leo Bassam"
            />
            <div className="ml-4">
              <h3 className="text-gray-900 font-semibold">Leo Bassam</h3>
              <p className="text-gray-500 text-sm">Founder creativegigs</p>
            </div>
          </div>
          <p className="text-gray-700">
            “Tens of thousands of business owners from around the world rely on
            our service”
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Chris Kalmar"
            />
            <div className="ml-4">
              <h3 className="text-gray-900 font-semibold">Chris Kalmar</h3>
              <p className="text-gray-500 text-sm">Founder creativegigs</p>
            </div>
          </div>
          <p className="text-gray-700">
            “The UI is very simple and clean, and it offers all the functional
            and right features.”
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Akis Laopodis"
            />
            <div className="ml-4">
              <h3 className="text-gray-900 font-semibold">Akis Laopodis</h3>
              <p className="text-gray-500 text-sm">Founder creativegigs</p>
            </div>
          </div>
          <p className="text-gray-700">
            “You can make sure that things keep running smoothly while you focus
            on the next project.”
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-purple-300 hover:bg-purple-400 font-bold dark:text-white text-black font-bold py-2 px-6 rounded-lg">
          View All
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
