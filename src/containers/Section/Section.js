import React from 'react';
import classes from './Section.module.css';

const Section = (props) => {
    return (
        <section className={classes.section_fiction}>
            <h2 className={classes.section_text}>
                {props.text}
            </h2>
        </section>
    );
};

export default Section;