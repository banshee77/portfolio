import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ handleClose, show, children }) => {
    let classesModalBlock = [classes.modal, classes.display_block];
    let classesModalBlockNone = [classes.modal, classes.display_none];
    
    const showHideClassName = show ? classesModalBlock.join (''): classesModalBlockNone.join ('');
  
    return (
      <div className={showHideClassName}>
        <section className={classes.modal_main}>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default Modal;