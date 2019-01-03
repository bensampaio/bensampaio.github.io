import React from 'react';

import styles from './HorizontalList.scss';

export const HorizontalList = (props) => (
    <ul {...props} className={styles.list} />
);

export const HorizontalListItem = (props) => (
    <li {...props} className={styles.item} />
);
