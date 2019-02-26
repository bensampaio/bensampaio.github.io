// @flow

import React, { memo, useEffect, type Node } from 'react';

import me from '../../../db/me';
import styles from './Screen.scss';

type ScreenProps = {
    children: Node,
    title?: string,
};

const Screen = ({ children, title }: ScreenProps) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} | ${me.fullName}`;
        } else {
            document.title = me.fullName;
        }

        return () => {
            document.title = me.fullName;
        };
    });

    return (
        <article className={styles.container}>
            {children}
        </article>
    );
};

export default memo<ScreenProps>(Screen);