'use client';

import cn from 'classnames';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FC, ReactNode, useCallback, useState } from 'react';

import { Icon } from '../Icon';

type Props = {
    children: ReactNode;
};

export const ExpandCollapse: FC<Props> = ({ children }) => {
    const [show, setShow] = useState(false);

    const toggleShow = useCallback(() => {
        setShow(!show);
    }, [show]);

    return (
        <>
            <div
                className={cn('transition-h', 'duration-200', 'ease-in-out', {
                    'h-0 overflow-hidden': !show,
                })}
            >
                {children}
            </div>
            <button
                className="bg-transparent border-0 cursor-pointer p-0 text-inherit text-base w-full"
                title={show ? 'Collapse' : 'Expand'}
                onClick={toggleShow}
            >
                <div
                    className={cn({
                        hidden: show,
                    })}
                >
                    <Icon aria-hidden={true} icon={faChevronDown} />
                </div>
                <div
                    className={cn({
                        hidden: !show,
                    })}
                >
                    <Icon aria-hidden={true} icon={faChevronUp} />
                </div>
            </button>
        </>
    );
};
