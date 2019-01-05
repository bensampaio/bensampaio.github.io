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
            <header className={styles.header}>
                <button className={classnames(styles.item, styles.toggleButton)} title={expanded ? 'Collapse' : 'Expand'} onClick={onToggle}>
                    <div className={styles.itemIcon}>
                        <FontAwesomeIcon icon={'bars'} />
                    </div>
                </button>
                <NavLink activeClassName={styles.headerLinkActive} className={classnames(styles.item, styles.link, styles.headerLink)} exact={true} to={'/'}>
                    <img className={styles.headerImage} src={me.picture} />
                    <h1 className={classnames(styles.itemName, styles.headerHeading)}>{me.fullName}</h1>
                </NavLink>
            </header>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkExperience)} className={classnames(styles.item, styles.link, styles.navLink)} to={'/experience'}>
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon icon={'file'} />
                            </div>
                            <span className={styles.itemName}>Experience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkEducation)} className={classnames(styles.item, styles.link, styles.navLink)} to={'/education'}>
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon icon={'graduation-cap'} />
                            </div>
                            <span className={styles.itemName}>Education</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkProjects)} className={classnames(styles.item, styles.link, styles.navLink)} to={'/projects'}>
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon icon={'code'} />
                            </div>
                            <span className={styles.itemName}>Projects</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <footer className={styles.footer}>
                <nav>
                    <ul className={styles.footerList}>
                        <li>
                            <NavLink activeClassName={classnames(styles.footerLinkActive, styles.footerLinkAbout)} className={classnames(styles.item, styles.link, styles.footerLink)} to={'/about'}>
                                <div className={styles.itemIcon}>
                                    <FontAwesomeIcon icon={'info-circle'} />
                                </div>
                                <span className={styles.itemName}>About</span>
                            </NavLink>
                        </li>
                        <li>
                            <div className={styles.item}>
                                <div className={styles.itemIcon}>
                                    ©
                                </div>
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