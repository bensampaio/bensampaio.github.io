import { FC } from 'react';

import styles from './VerticalList.module.scss';

export const VerticalList: FC<JSX.IntrinsicElements['ul']> = (props) => (
    <ul {...props} className={styles.list} />
);

export const VerticalListItem: FC<JSX.IntrinsicElements['li']> = (props) => (
    <li {...props} className={styles.item} />
);
