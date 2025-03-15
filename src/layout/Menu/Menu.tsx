'use client';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useCallback, useState } from 'react';
import {
  faBars,
  faCode,
  faFile,
  faGraduationCap,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import { me } from '../../../db/me';
import { ROUTES } from '../../shared/constants';
import { Icon } from '../../shared/Icon';

export const Menu: FC = () => {
  const pathname = usePathname();

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
    'px-sm',
  );

  const itemClassNames = cn(
    'flex',
    'items-center',
    'mx-xs',
    'my-0',
    'pr-xs',
    'py-2xs',
    'no-underline',
  );

  const itemHoverClassNames = 'hover:bg-gray-4';

  const itemIconClassNames = cn(
    'flex',
    'items-center',
    'justify-center',
    'h-lg',
    'w-lg',
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
        className={cn('flex', 'items-center', 'justify-between', 'flex-none')}
      >
        <Link
          className={cn(itemClassNames, {
            [inactiveLinkClassNames]: pathname !== ROUTES.INFO,
            'text-info visited:text-info': pathname === ROUTES.INFO,
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
                'border-white': pathname !== ROUTES.INFO,
                'border-info': pathname === ROUTES.INFO,
              },
            )}
            src={me.picture}
          />
          <h1 className={cn('text-base', 'ml-xs', 'my-0')}>{me.fullName}</h1>
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
            itemHoverClassNames,
          )}
          title={expanded ? 'Collapse' : 'Expand'}
          onClick={handleToggle}
        >
          <Icon aria-hidden={true} fixedWidth={true} icon={faBars} />
        </button>
      </div>
      <nav
        className={cn('flex-auto', {
          'h-0 md:h-auto overflow-hidden md:overflow-hidden': !expanded,
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
            'list-none',
          )}
        >
          <li>
            <Link
              className={cn(itemClassNames, itemHoverClassNames, {
                [inactiveLinkClassNames]: pathname !== ROUTES.EXPERIENCE,
                'text-experience visited:text-experience':
                  pathname === ROUTES.EXPERIENCE,
              })}
              href={ROUTES.EXPERIENCE}
              onClick={handleSelect}
            >
              <div className={itemIconClassNames}>
                <Icon aria-hidden={true} fixedWidth={true} icon={faFile} />
              </div>
              <span className={itemNameClassNames}>Experience</span>
            </Link>
          </li>
          <li>
            <Link
              className={cn(itemClassNames, itemHoverClassNames, {
                [inactiveLinkClassNames]: pathname !== ROUTES.EDUCATION,
                'text-education visited:text-education':
                  pathname === ROUTES.EDUCATION,
              })}
              href={ROUTES.EDUCATION}
              onClick={handleSelect}
            >
              <div className={itemIconClassNames}>
                <Icon
                  aria-hidden={true}
                  fixedWidth={true}
                  icon={faGraduationCap}
                />
              </div>
              <span className={itemNameClassNames}>Education</span>
            </Link>
          </li>
          <li>
            <Link
              className={cn(itemClassNames, itemHoverClassNames, {
                [inactiveLinkClassNames]: pathname !== ROUTES.PROJECTS,
                'text-projects visited:text-projects':
                  pathname === ROUTES.PROJECTS,
              })}
              href={ROUTES.PROJECTS}
              onClick={handleSelect}
            >
              <div className={itemIconClassNames}>
                <Icon aria-hidden={true} fixedWidth={true} icon={faCode} />
              </div>
              <span className={itemNameClassNames}>Projects</span>
            </Link>
          </li>
          <li className="flex-auto"></li>
          <li>
            <Link
              className={cn(itemClassNames, itemHoverClassNames, {
                [inactiveLinkClassNames]: pathname !== ROUTES.ABOUT,
                'text-about visited:text-about': pathname === ROUTES.ABOUT,
              })}
              href={ROUTES.ABOUT}
              onClick={handleSelect}
            >
              <div className={itemIconClassNames}>
                <Icon
                  aria-hidden={true}
                  fixedWidth={true}
                  icon={faInfoCircle}
                />
              </div>
              <span className={itemNameClassNames}>About</span>
            </Link>
          </li>
          <li>
            <div className={itemClassNames}>
              <div className={itemIconClassNames}>
                <Icon
                  fixedWidth={true}
                  icon={faCopyright}
                  title={`${new Date().getFullYear()} ${me.fullName}`}
                />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
