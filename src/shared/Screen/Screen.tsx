import { FC, memo, ReactNode, useEffect } from 'react';

import me from '../../../db/me';
import styles from './Screen.module.scss';

type Props = {
    children: ReactNode,
    title?: string,
};

const Screen: FC<Props> = ({ children, title }) => {
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

    return <article className={styles.container}>{children}</article>;
};

export default memo<Props>(Screen);
