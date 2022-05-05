import { FC } from 'react';

import styles from './HorizontalList.module.scss';

export const HorizontalList: FC<JSX.IntrinsicElements['ul']> = (props) => <ul {...props} className={styles.list} />;

export const HorizontalListItem: FC<JSX.IntrinsicElements['li']> = (props) => <li {...props} className={styles.item} />;
