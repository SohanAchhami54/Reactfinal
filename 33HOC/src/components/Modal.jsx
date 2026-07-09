import React from 'react'
import {createPortal} from 'react-dom'

const Modal = ({isOpen,onClose,children}) => { 
    if (!isOpen) return 
  return createPortal(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        {children}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  )
}

export default Modal
