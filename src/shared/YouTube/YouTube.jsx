// @flow

import React, { memo } from 'react';

const YouTube = (props: HTMLIFrameElement) => (
    <iframe {...props} frameBorder="0" allowFullScreen />
);

export default memo<HTMLIFrameElement>(YouTube);
