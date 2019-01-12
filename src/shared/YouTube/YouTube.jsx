// @flow

import React from 'react';

const YouTube = (props: HTMLIFrameElement) => (
    <iframe {...props} frameBorder="0" allowFullScreen />
);

export default React.memo<HTMLIFrameElement>(YouTube);