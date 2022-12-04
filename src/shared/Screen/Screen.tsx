import cn from 'classnames';
import { FC, memo, ReactNode, useEffect } from 'react';

import me from '../../../db/me';

type Props = {
    children: ReactNode;
    title?: string;
};

const Screen: FC<Props> = ({ children, title }) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | ${me.fullName}`;
        } else {
            document.title = me.fullName;
        }

        return () => {
            document.title = me.fullName;
        };
    });

    return (
        <article
            className={cn('h-full', 'max-w-prose', 'my-0', 'mx-auto', 'w-full')}
        >
            {children}
        </article>
    );
};

export default memo<Props>(Screen);
