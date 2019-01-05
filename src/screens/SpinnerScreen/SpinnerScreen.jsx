import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './SpinnerScreen.scss';

const SpinnerScreen = React.memo(() => (
    <Screen>
        <div className={styles.container}>
            <FontAwesomeIcon className={styles.icon} fixedWidth={true} icon={'spinner'} spin={true} />
        </div>
    </Screen>
));

export default SpinnerScreen;