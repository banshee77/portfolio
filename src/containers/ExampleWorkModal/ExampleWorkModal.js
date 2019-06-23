import React from 'react';
import classes from './ExampleWorkModal.module.css';
import getImage from '../js/GetImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExampleWorkModal = props => {

    const image = getImage(props.example.image.src);

    let example = props.example;
    let modalClass = props.open ? classes.modal__open : classes.modal__closed;

    return (
      <div className={modalClass}>
        <span className={classes.modal__closeButton} onClick={props.closeModal}>
          <FontAwesomeIcon icon={["fas", "window-close"]} />
        </span>
        <div className={classes.modal__text}>
          <h2 className={classes.modal_title}>
            {example.title}
          </h2>
          <a className={classes.modal__link}
            href={example.href}>
            Check it out
          </a>
          <p className={classes.modal__description}>
            {example.desc}
          </p>
          <img alt={example.image.desc} className={classes.modal__image} src={image} />
        </div>
      </div>
    )
  };

export default ExampleWorkModal;
