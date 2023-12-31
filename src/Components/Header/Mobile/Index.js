import React from 'react'
import './Mobile.css'
function Mobile ({isOpen, setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi fi-rr-cross-circle icon"></i>

      </div>
      <div className="mobile-options">
     <div className="mobile-option">
     <a href='#projects'>
     <i className="fi fi-rr-edit-alt option-icon"></i> Projects
     </a>
     </div>
    
     <div className="mobile-option">
     <a href='#skills'>
     <i className="fi fi-rs-laptop option-icon"></i>Skills
     </a>
     </div>
    
     <div className="mobile-option">
     <a href='#work'>
     <i className="fi fi-rr-briefcase option-icon"></i>Work
     </a>
     </div>
    
     <div className="mobile-option">
     <a href='#contact'>
     <i className="fi fi-ss-user option-icon"></i>Contact
     </a>
     </div>
      </div>
    </div>
  )
}

export default Mobile
