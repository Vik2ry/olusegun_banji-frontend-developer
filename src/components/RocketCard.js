import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

function RocketCard({ rocket }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative lg:w-1/4 md:w-1/2 p-4 w-full">
      <div onClick={openModal}>
        <div className="block relative h-48 rounded overflow-hidden cursor-pointer">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={rocket.flickr_images.length >= 1 ? rocket.flickr_images[0] : "https://dummyimage.com/420x260"}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-white-500 text-xs tracking-widest title-font mb-1">
            {rocket.type}
          </h3>
          <h2 className="text-white title-font text-lg font-medium">
            {rocket.name}
          </h2>
          <p className="mt-1">${rocket.cost_per_launch}</p>
        </div>
      </div>


      {/* Render the modal when it's open */}
      {isModalOpen && (
        <Modal rocket={rocket} closeModal={closeModal} />
      )}
    </div>
  );
}

export default RocketCard;
