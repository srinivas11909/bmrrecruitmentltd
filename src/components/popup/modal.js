// components/Modal.js
"use client"
import React from 'react';
import PropTypes from 'prop-types';
import  './Modal.css';
import { X } from 'react-feather';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent w-11/12 lg:w-9/12" onClick={(e) => e.stopPropagation()}>
        <div className='header bg-lime-500 text-white font-bold flex sticky top-0 bg-shite border-b px-3 py-3'>
           {title ? title : null}
           <button className="closeButton ml-auto p-3" onClick={onClose}><X /></button>
        </div>
  
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
