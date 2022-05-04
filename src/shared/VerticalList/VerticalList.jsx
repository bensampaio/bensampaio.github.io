// @flow

import { memo } from 'react';

import styles from './VerticalList.module.scss';

export const VerticalList = memo<HTMLUListElement>(
    (props: HTMLUListElement) => <ul {...props} className={styles.list} />
);

export const VerticalListItem = memo<HTMLLIElement>((props: HTMLLIElement) => (
    <li {...props} className={styles.item} />
));
