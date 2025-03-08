import cn from 'classnames';
import { FC, memo, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Screen: FC<Props> = ({ children }) => {
    return (
        <article
            className={cn('h-full', 'max-w-prose', 'my-0', 'mx-auto', 'w-full')}
        >
            {children}
        </article>
    );
};

export default memo<Props>(Screen);
