import cn from 'classnames';
import { ElementType, JSX, ReactElement } from 'react';

type Props<C extends ElementType> = JSX.IntrinsicElements['a'] & {
    as?: C;
};

export const Anchor = <C extends ElementType = 'a'>({
    as,
    className,
    ...rest
}: Props<C>): ReactElement => {
    const Component = as || 'a';

    return (
        <Component
            {...rest}
            className={cn(
                'text-primary',
                'visited:text-primary',
                'underline',
                'hover:no-underline',
                className
            )}
        />
    );
};
