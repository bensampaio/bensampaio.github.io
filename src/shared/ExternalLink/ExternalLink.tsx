import { FC, ReactNode } from 'react';

type Props = Omit<JSX.IntrinsicElements['a'], 'href'> & {
    children: ReactNode,
    to: string,
};

const ExternalLink: FC<Props> = ({ children, to, ...rest }) => (
    <a {...rest} href={to} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
);

export default ExternalLink;
