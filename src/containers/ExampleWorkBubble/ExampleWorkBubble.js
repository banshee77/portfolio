import React from 'react';
import classes from './ExampleWorkBubble.module.css';
import getImage  from '../js/GetImage';


const ExampleWorkBubble = props => {
  const image = getImage(props.example.image.src);

  return (
    <div className={classes.section__exampleWrapper}
    onClick= { (evt) => props.openModal(evt,props.example) }>
      <div className={classes.section__example}>
        <img className={classes.section__exampleImage}
          src={image} alt={props.example.image.desc}
        />
        <dl className={classes.colorCloud}>
          <dt className={classes.section__exampleTitle}>
            {props.example.title}
          </dt>
          <dd></dd>
        </dl>
      </div>
    </div>
  );
};

export default ExampleWorkBubble;