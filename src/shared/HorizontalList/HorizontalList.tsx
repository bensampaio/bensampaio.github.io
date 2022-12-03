import { FC } from 'react';

export const HorizontalList: FC<JSX.IntrinsicElements['ul']> = (props) => (
    <ul {...props} className="flex flex-row flex-wrap list-none gap-x-sm gap-y-sm m-0 p-0" />
);

export const HorizontalListItem: FC<JSX.IntrinsicElements['li']> = (props) => (
    <li {...props} />
);
