import classnames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';

import styles from './Sidebar.scss';

const Sidebar = React.memo(() => (
    <aside className={styles.container}>
        <header className={styles.header}>
            <NavLink activeClassName={styles.activeLink} className={classnames(styles.link, styles.headerLink)} exact={true} to={'/'}>
                <img className={styles.headerImage} src={me.picture} />
                <h1 className={styles.headerHeading}>{me.fullName}</h1>
            </NavLink>
        </header>
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li>
                    <NavLink activeClassName={classnames(styles.activeLink, styles.navActiveLink)} className={classnames(styles.link, styles.navLink)} to={'/experience'}>
                        <FontAwesomeIcon icon={'file'} />
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classnames(styles.activeLink, styles.navActiveLink)} className={classnames(styles.link, styles.navLink)} to={'/education'}>
                        <FontAwesomeIcon icon={'graduation-cap'} />
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classnames(styles.activeLink, styles.navActiveLink)} className={classnames(styles.link, styles.navLink)} to={'/projects'}>
                        <FontAwesomeIcon icon={'code'} />
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
        <footer className={styles.footer}>
            <nav>
                <ul className={styles.footerList}>
                    <li>
                        <NavLink activeClassName={classnames(styles.activeLink, styles.footerActiveLink)} className={classnames(styles.link, styles.footerLink)} to={'/about'}>
                            <FontAwesomeIcon icon={'info-circle'} />
                            About
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