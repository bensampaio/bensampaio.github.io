import React from 'react';

const ExternalLink = ({ children, to, ...rest }) => (
    <a {...rest} href={to} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
);

export default ExternalLink;