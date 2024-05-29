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
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className='header flex sticky top-0 bg-shite border-b shadow-md'>
           {title}
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
