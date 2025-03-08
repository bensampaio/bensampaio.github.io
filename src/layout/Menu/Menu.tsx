import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, memo, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import me from '../../../db/me';
import { ROUTES } from '../../constants';

const Menu: FC = () => {
    const router = useRouter();

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

    const itemClassNames = cn(
        'flex',
        'items-center',
        'mx-xs',
        'my-0',
        'pr-xs',
        'py-2xs',
        'no-underline'
    );

    const itemHoverClassNames = 'hover:bg-gray-4';

    const itemIconClassNames = cn(
        'flex',
        'items-center',
        'justify-center',
        'h-lg',
        'w-lg'
    );

    const itemNameClassNames = cn('ml-xxs', 'whitespace-nowrap');

    const inactiveLinkClassNames = cn('text-inherit', 'visited:text-inherit');

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
                <Link
                    className={cn(itemClassNames, {
                        [inactiveLinkClassNames]:
                            router.pathname !== ROUTES.INFO,
                        'text-info visited:text-info':
                            router.pathname === ROUTES.INFO,
                    })}
                    href={ROUTES.INFO}
                    onClick={handleSelect}
                >
                    <Image
                        alt=""
                        aria-hidden={true}
                        className={cn(
                            'border-2',
                            'border-solid',
                            'rounded-full',
                            'h-lg',
                            'w-lg',
                            'text-inherit',
                            {
                                'border-white': router.pathname !== ROUTES.INFO,
                                'border-info': router.pathname === ROUTES.INFO,
                            }
                        )}
                        src={me.picture}
                    />
                    <h1 className={cn('text-base', 'ml-xs', 'my-0')}>
                        {me.fullName}
                    </h1>
                </Link>
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
                <ul
                    className={cn(
                        'flex',
                        'flex-auto',
                        'flex-col',
                        'md:flex-row',
                        'm-0',
                        'p-0',
                        'list-none'
                    )}
                >
                    <li>
                        <Link
                            className={cn(itemClassNames, itemHoverClassNames, {
                                [inactiveLinkClassNames]:
                                    router.pathname !== ROUTES.EXPERIENCE,
                                'text-experience visited:text-experience':
                                    router.pathname === ROUTES.EXPERIENCE,
                            })}
                            href={ROUTES.EXPERIENCE}
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="file"
                                />
                            </div>
                            <span className={itemNameClassNames}>
                                Experience
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cn(itemClassNames, itemHoverClassNames, {
                                [inactiveLinkClassNames]:
                                    router.pathname !== ROUTES.EDUCATION,
                                'text-education visited:text-education':
                                    router.pathname === ROUTES.EDUCATION,
                            })}
                            href={ROUTES.EDUCATION}
                            onClick={handleSelect}
                        >
                            <div className={itemIconClassNames}>
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    fixedWidth={true}
                                    icon="graduation-cap"
                                />
                            </div>
                            <span className={itemNameClassNames}>
                                Education
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={cn(itemClassNames, itemHoverClassNames, {
                                [inactiveLinkClassNames]:
                                    router.pathname !== ROUTES.PROJECTS,
                                'text-projects visited:text-projects':
                                    router.pathname === ROUTES.PROJECTS,
                            })}
                            href={ROUTES.PROJECTS}
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
                        </Link>
                    </li>
                    <li className="flex-auto"></li>
                    <li>
                        <Link
                            className={cn(itemClassNames, itemHoverClassNames, {
                                [inactiveLinkClassNames]:
                                    router.pathname !== ROUTES.ABOUT,
                                'text-about visited:text-about':
                                    router.pathname === ROUTES.ABOUT,
                            })}
                            href={ROUTES.ABOUT}
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
                        </Link>
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
