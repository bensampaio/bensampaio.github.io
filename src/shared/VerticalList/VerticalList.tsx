import { FC, JSX } from 'react';

export const VerticalList: FC<JSX.IntrinsicElements['ul']> = ({
  className,
  ...rest
}) => (
  <ul
    {...rest}
    className={`flex flex-col gap-y-lg list-none m-0 p-0 ${className}`}
  />
);

export const VerticalListItem: FC<JSX.IntrinsicElements['li']> = (props) => (
  <li {...props} />
);
