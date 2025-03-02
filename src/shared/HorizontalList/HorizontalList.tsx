import { FC, JSX } from 'react';

export const HorizontalList: FC<JSX.IntrinsicElements['ul']> = ({
    className,
    ...props
}) => (
    <ul
        {...props}
        className={`flex flex-row flex-wrap list-none gap-x-sm gap-y-sm m-0 p-0 ${className}`}
    />
);

export const HorizontalListItem: FC<JSX.IntrinsicElements['li']> = (props) => (
    <li {...props} />
);
