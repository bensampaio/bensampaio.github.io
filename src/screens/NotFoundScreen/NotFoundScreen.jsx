import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './NotFoundScreen.scss';

const NotFoundScreen = React.memo(() => (
    <Screen>
        <div className={styles.container}>
            <h2 className={styles.heading}>Page not found</h2>
            <FontAwesomeIcon className={styles.icon} icon={['far', 'frown-open']} />
        </div>
    </Screen>
));

export default NotFoundScreen;