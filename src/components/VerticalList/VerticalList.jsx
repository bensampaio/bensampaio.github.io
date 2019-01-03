import React from 'react';

import styles from './VerticalList.scss';

const VerticalList = (props) => (
    <ul {...props} className={styles.list} />
);

export default VerticalList;