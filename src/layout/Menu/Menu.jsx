// @flow

import classnames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';
import styles from './Menu.module.scss';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    const containerClassNames = classnames(styles.container, {
        [styles.containerExpanded]: expanded,
        [styles.containerCollapsed]: !expanded,
    });

    const handleSelect = useCallback(() => {
        setExpanded(false);
    }, []);

    const handleToggle = useCallback(() => {
        setExpanded((expanded) => !expanded);
    }, []);

    return (
        <header className={containerClassNames}>
            <div className={styles.header}>
                <NavLink
                    className={({ isActive }) =>
                        classnames(
                            styles.item,
                            styles.link,
                            styles.headerLink,
                            {
                                [styles.linkHome]: isActive,
                            }
                        )
                    }
                    end
                    to="/"
                    onClick={handleSelect}
                >
                    <img
                        alt=""
                        aria-hidden={true}
                        className={styles.headerImage}
                        src={me.picture}
                    />
                    <h1 className={styles.headerHeading}>{me.fullName}</h1>
                </NavLink>
                <button
                    className={classnames(
                        styles.toggleButton,
                        styles.itemHover
                    )}
                    title={expanded ? 'Collapse' : 'Expand'}
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon
                        aria-hidden={true}
                        fixedWidth={true}
                        icon="bars"
                    />
                </button>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classnames(
                                    styles.item,
                                    styles.itemHover,
                                    styles.link,
                                    {
                                        [styles.itemActive]: isActive,
                                        [styles.linkExperience]: isActive,
                                    }
                                )
                            }
                            to="/experience"
                            onClick={handleSelect}
                        >
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="file"
                                />
                            </div>
                            <span className={styles.itemName}>Experience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classnames(
                                    styles.item,
                                    styles.itemHover,
                                    styles.link,
                                    {
                                        [styles.itemActive]: isActive,
                                        [styles.linkEducation]: isActive,
                                    }
                                )
                            }
                            to="/education"
                            onClick={handleSelect}
                        >
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="graduation-cap"
                                />
                            </div>
                            <span className={styles.itemName}>Education</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classnames(
                                    styles.item,
                                    styles.itemHover,
                                    styles.link,
                                    {
                                        [styles.itemActive]: isActive,
                                        [styles.linkProjects]: isActive,
                                    }
                                )
                            }
                            to="/projects"
                            onClick={handleSelect}
                        >
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="code"
                                />
                            </div>
                            <span className={styles.itemName}>Projects</span>
                        </NavLink>
                    </li>
                    <li className={styles.separator}></li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                classnames(
                                    styles.item,
                                    styles.itemHover,
                                    styles.link,
                                    {
                                        [styles.itemActive]: isActive,
                                        [styles.linkAbout]: isActive,
                                    }
                                )
                            }
                            to="/about"
                            onClick={handleSelect}
                        >
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="info-circle"
                                />
                            </div>
                            <span className={styles.itemName}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={styles.item}>
                            <div className={styles.itemIcon}>
                                <FontAwesomeIcon
                                    fixedWidth={true}
                                    icon={['far', 'copyright']}
                                    title={`${new Date().getFullYear()} ${
                                        me.fullName
                                    }`}
                                />
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default memo(Menu);
