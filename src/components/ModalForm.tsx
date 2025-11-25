import React from "react";

interface ModalFormProps {
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-amber-950">Get Started</h2>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-amber-950"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-amber-950"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-2 rounded h-24 focus:outline-none focus:border-amber-950"
          ></textarea>
          <button
            type="submit"
            className="bg-amber-950 text-white py-2 rounded hover:bg-amber-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
