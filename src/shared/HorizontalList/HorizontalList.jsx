// @flow

import React from 'react';

import styles from './HorizontalList.scss';

export const HorizontalList = React.memo<HTMLUListElement>((props: HTMLUListElement) => (
    <ul {...props} className={styles.list} />
));

export const HorizontalListItem = React.memo<HTMLLIElement>((props: HTMLLIElement) => (
    <li {...props} className={styles.item} />
));
