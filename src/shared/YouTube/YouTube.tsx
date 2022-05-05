import { FC } from 'react';

const YouTube: FC<JSX.IntrinsicElements['iframe']> = (props) => (
    <iframe {...props} frameBorder="0" allowFullScreen />
);

export default YouTube;
