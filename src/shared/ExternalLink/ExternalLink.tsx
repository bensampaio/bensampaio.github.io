import { FC, JSX } from 'react';

type Props = JSX.IntrinsicElements['a'];

const ExternalLink: FC<Props> = ({ children, href, ...rest }) => (
  <a {...rest} href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
