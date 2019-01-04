import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';
import styles from './Sidebar.scss';

const Sidebar = React.memo(() => (
    <aside className={styles.container}>
        <header className={styles.header}>
            <NavLink activeClassName={styles.headerLinkActive} className={classnames(styles.link, styles.headerLink)} exact={true} to={'/'}>
                <img className={styles.headerImage} src={me.picture} />
                <h1 className={styles.headerHeading}>{me.fullName}</h1>
            </NavLink>
        </header>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkExperience)} className={classnames(styles.link, styles.navLink)} to={'/experience'}>
                        <div className={styles.linkIcon}>
                            <FontAwesomeIcon icon={'file'} />
                        </div>
                        <span>Experience</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkEducation)} className={classnames(styles.link, styles.navLink)} to={'/education'}>
                        <div className={styles.linkIcon}>
                            <FontAwesomeIcon icon={'graduation-cap'} />
                        </div>
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classnames(styles.navLinkActive, styles.navLinkProjects)} className={classnames(styles.link, styles.navLink)} to={'/projects'}>
                        <div className={styles.linkIcon}>
                            <FontAwesomeIcon icon={'code'} />
                        </div>
                        <span>Projects</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.footerList}>
                    <li>
                        <NavLink activeClassName={classnames(styles.footerLinkActive, styles.footerLinkAbout)} className={classnames(styles.link, styles.footerLink)} to={'/about'}>
                            <div className={styles.linkIcon}>
                                <FontAwesomeIcon icon={'info-circle'} />
                            </div>
                            <span>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles.footerCopyright}>
                            © {new Date().getFullYear()} {me.fullName}
                        </div>
                    </li>
                </ul>
            </nav>
        </footer>
    </aside>
));

export default Sidebar;