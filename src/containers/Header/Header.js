import React from 'react';
import classes from './Header.module.css';
import resume from './../../files/WieslawPedzich-Resume.pdf';
import HeaderListItem from './HeaderListItem/HeaderListItem';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faFileAlt, faFilePdf } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas, faFileAlt, faFilePdf);

const Header = () => {
    return (
        <div className={classes.overflow_auto}>
            <h1 className={classes.section__heading_largest}>WIESŁAW PĘDZICH</h1>
            <ul className={classes.section_social}>
                <HeaderListItem
                    title={"GitHub Profile"}
                    target={"_blank"}
                    href={"https://www.github.com"}
                    iconPrefix={"fab"}
                    iconName={"github"} />
                <HeaderListItem
                    title={"LinkedIn Profile"}
                    target={"_blank"}
                    href={"https://www.linkedin.com/in/wieslaw-pedzich-4855791a"}
                    iconPrefix={"fab"}
                    iconName={"linkedin"} />
                <HeaderListItem
                    title={"Resume"}
                    target={"_blank"}
                    href={resume}
                    iconPrefix={"fas"}
                    iconName={"file-pdf"} />
            </ul>
        </div>
    );
};

export default Header;