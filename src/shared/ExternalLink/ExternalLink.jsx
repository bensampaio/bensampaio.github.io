// @flow

import React, { type Node } from 'react';

type ExternalLinkProps = {
    ...HTMLAnchorElement,
    children: Node,
    to: string,
};

const ExternalLink = ({ children, to, ...rest }: ExternalLinkProps) => (
    <a {...rest} href={to} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
);

export default React.memo<ExternalLinkProps>(ExternalLink);