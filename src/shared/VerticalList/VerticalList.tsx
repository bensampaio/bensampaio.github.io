import { FC } from 'react';

export const VerticalList: FC<JSX.IntrinsicElements['ul']> = (props) => (
    <ul {...props} className="flex flex-col gap-y-lg list-none m-0 p-0" />
);

export const VerticalListItem: FC<JSX.IntrinsicElements['li']> = (props) => (
    <li {...props} />
);
