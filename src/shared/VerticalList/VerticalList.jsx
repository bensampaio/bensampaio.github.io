// @flow

import React from 'react';

import styles from './VerticalList.scss';

export const VerticalList = React.memo<HTMLUListElement>((props: HTMLUListElement) => (
    <ul {...props} className={styles.list} />
));

export const VerticalListItem = React.memo<HTMLLIElement>((props: HTMLLIElement) => (
    <li {...props} className={styles.item} />
));
