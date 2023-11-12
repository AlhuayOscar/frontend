import React, { useState } from 'react';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [isImageCentered, setIsImageCentered] = useState(true);

  const handleImageClick = () => {
    setIsImageCentered(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-30">
      <div className="flex flex-col bg-white p-6 rounded-3xl shadow-lg">
        <button
          className="cursor-pointer text-xl self-end transition-transform transform hover:scale-125"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg mb-4 text-text-off">
          Debes ingresar una Imagen como está:
        </h2>
        <div className={`flex self-center justify-center pb-10`}>
          {!isImageCentered && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 45 63"
              className="absolute h-68 w-44 bg-transparent cursor-pointer transition-transform transform hover:scale-110 bg-violet-100"
            >
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />

              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="#61439D"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <line
                x1="0"
                y1="100%"
                x2="100%"
                y2="100%"
                stroke="#61439D"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#61439D"
                strokeWidth="2"
                strokeDasharray="5 2"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="#61439D"
                strokeWidth="2"
                strokeDasharray="5 2"
              />
            </svg>
          )}
          <img
            src="assets\images\certScan-test.png"
            alt="Imagen de rochos bailando con miranda"
            className={`h-60 w-40 py-2 shadow-xl cursor-pointer transition-transform transform hover:scale-105  z-40 ${
              isImageCentered ? 'self-center' : 'self-start'
            }`}
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
