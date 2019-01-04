import React from 'react';

import styles from './VerticalList.scss';

export const VerticalList = (props) => (
    <ul {...props} className={styles.list} />
);

export const VerticalListItem = (props) => (
    <li {...props} className={styles.item} />
);
