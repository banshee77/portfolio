import React from 'react';
import classes from './HeaderListItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderListItem = (props) => {
    return (
        <li className={classes.socialWrapper}>
            <a className={classes.social}
                title={props.title}
                target={props.target}
                href={props.href}>
                <FontAwesomeIcon icon={[props.iconPrefix, props.iconName]} />
            </a>
        </li>
    );
};

export default HeaderListItem;