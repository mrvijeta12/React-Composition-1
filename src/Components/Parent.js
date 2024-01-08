import React, { useState } from 'react';
import Modal from './Child';

const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='showModel'>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p >This is the content of the modal.</p>
      </Modal>
    </div>
  );
};

export default Parent;

