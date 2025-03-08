import { FC, JSX } from 'react';

export const YouTube: FC<JSX.IntrinsicElements['iframe']> = (props) => (
  <iframe {...props} frameBorder="0" allowFullScreen />
);
