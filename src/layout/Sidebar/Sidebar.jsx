import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';
import styles from './Sidebar.scss';

const Sidebar = React.memo(({ expanded, onToggle }) => {
    const containerClassNames = classnames(styles.container, {
        [styles.containerExpanded]: expanded,
        [styles.containerCollapsed]: !expanded,
    });

    return (
        <aside className={containerClassNames}>
            <button className={classnames(styles.toggleButton, styles.itemHover)} title={expanded ? 'Collapse' : 'Expand'} onClick={onToggle}>
                <FontAwesomeIcon fixedWidth={true} icon={'bars'} />
            </button>
            <header className={styles.header}>
                <NavLink activeClassName={styles.linkHome} className={classnames(styles.item, styles.link, styles.headerLink)} exact={true} to={'/'}>
                    <img className={styles.headerImage} src={me.picture} />
                    <h1 className={styles.headerHeading}>{me.fullName}</h1>
                </NavLink>
            </header>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <NavLink activeClassName={classnames(styles.itemActive, styles.linkExperience)} className={classnames(styles.item, styles.itemHover, styles.link)} to={'/experience'}>
                            <FontAwesomeIcon fixedWidth={true} icon={'file'} />
                            <span className={styles.itemName}>Experience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classnames(styles.itemActive, styles.linkEducation)} className={classnames(styles.item, styles.itemHover, styles.link)} to={'/education'}>
                            <FontAwesomeIcon fixedWidth={true} icon={'graduation-cap'} />
                            <span className={styles.itemName}>Education</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classnames(styles.itemActive, styles.linkProjects)} className={classnames(styles.item, styles.itemHover, styles.link)} to={'/projects'}>
                            <FontAwesomeIcon fixedWidth={true} icon={'code'} />
                            <span className={styles.itemName}>Projects</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer className={styles.footer}>
                <nav>
                    <ul className={styles.list}>
                        <li>
                            <NavLink activeClassName={classnames(styles.itemActive, styles.linkAbout)} className={classnames(styles.item, styles.itemHover, styles.link)} to={'/about'}>
                                <FontAwesomeIcon fixedWidth={true} icon={'info-circle'} />
                                <span className={styles.itemName}>About</span>
                            </NavLink>
                        </li>
                        <li>
                            <div className={styles.item}>
                                <FontAwesomeIcon fixedWidth={true} icon={['far', 'copyright']} />
                                <span className={styles.itemName}>
                                    {new Date().getFullYear()} {me.fullName}
                                </span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </footer>
        </aside>
    );
});

export default Sidebar;