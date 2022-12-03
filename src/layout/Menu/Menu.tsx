import cn from 'classnames';
import { FC, memo, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';
import styles from './Menu.module.scss';

const Menu: FC = () => {
    const [expanded, setExpanded] = useState(false);

    const containerClassNames = cn(
        'flex',
        'flex-col',
        'md:flex-row',
        'fixed',
        'left-0',
        'right-0',
        'top-0',
        'z-10',
        'bg-gray-3',
        'text-white',
        'py-xs',
        'px-sm'
    );

    const itemClassNames = cn('flex', 'items-center', 'mx-xs', 'my-0', 'pr-xs', 'py-2xs');

    const itemHoverClassNames = 'hover:bg-gray-4';

    const itemIconClassNames = cn('flex', 'items-center', 'justify-center', 'h-lg', 'w-lg');

    const itemNameClassNames = cn('ml-xxs', 'whitespace-nowrap');

    const handleSelect = useCallback(() => {
        setExpanded(false);
    }, []);

    const handleToggle = useCallback(() => {
        setExpanded((expanded) => !expanded);
    }, []);

    return (
        <header className={cn(containerClassNames)}>
            <div
                className={cn(
                    'flex',
                    'items-center',
                    'justify-between',
                    'flex-none'
                )}
            >
                <NavLink
                    className={({ isActive }) =>
                        cn(itemClassNames, styles.link, styles.headerLink, {
                            [styles.linkHome]: isActive,
                        })
                    }
                    end
                    to="/"
                    onClick={handleSelect}
                >
                    <img
                        alt=""
                        aria-hidden={true}
                        className={cn('border-2', 'border-solid', 'border-current', 'rounded-full', 'h-lg', 'w-lg')}
                        src={me.picture}
                    />
                    <h1 className={cn('text-base', 'ml-xs', 'my-0')}>
                        {me.fullName}
                    </h1>
                </NavLink>
                <button
                    className={cn(
                        'bg-transparent',
                        'border-0',
                        'rounded-full',
                        'text-inherit',
                        'text-base',
                        'cursor-pointer',
                        'm-0',
                        'p-xs',
                        'md:hidden',
                        itemHoverClassNames
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
            <nav
                className={cn('flex-auto', {
                    'h-0 md:h-auto overflow-hidden md:overflow-hidden':
                        !expanded,
                })}
            >
                <ul className={cn('flex', 'flex-auto', 'flex-col', 'md:flex-row', 'm-0', 'p-0', 'list-none')}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn(itemClassNames, itemHoverClassNames, styles.link, {
                                    [styles.linkExperience]: isActive,
                                })
                            }
                            to="/experience"
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="file"
                                />
                            </div>
                            <span className={itemNameClassNames}>Experience</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn(itemClassNames, itemHoverClassNames, styles.link, {
                                    [styles.linkEducation]: isActive,
                                })
                            }
                            to="/education"
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="graduation-cap"
                                />
                            </div>
                            <span className={itemNameClassNames}>Education</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn(itemClassNames, itemHoverClassNames, styles.link, {
                                    [styles.linkProjects]: isActive,
                                })
                            }
                            to="/projects"
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="code"
                                />
                            </div>
                            <span className={itemNameClassNames}>Projects</span>
                        </NavLink>
                    </li>
                    <li className="flex-auto"></li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                cn(itemClassNames, itemHoverClassNames, styles.link, {
                                    [styles.linkAbout]: isActive,
                                })
                            }
                            to="/about"
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="info-circle"
                                />
                            </div>
                            <span className={itemNameClassNames}>About</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className={itemClassNames}>
                            <div className={itemIconClassNames}>
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
