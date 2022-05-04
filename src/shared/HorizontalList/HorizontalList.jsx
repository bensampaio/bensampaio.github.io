// @flow

import { memo } from 'react';

import styles from './HorizontalList.scss';

export const HorizontalList = memo<HTMLUListElement>(
    (props: HTMLUListElement) => <ul {...props} className={styles.list} />
);

export const HorizontalListItem = memo<HTMLLIElement>(
    (props: HTMLLIElement) => <li {...props} className={styles.item} />
);
