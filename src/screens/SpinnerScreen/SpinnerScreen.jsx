// @flow

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './SpinnerScreen.scss';

type SpinnerScreenProps = {};

const SpinnerScreen = () => (
    <Screen>
        <div className={styles.container}>
            <FontAwesomeIcon
                aria-hidden={true}
                className={styles.icon}
                fixedWidth={true}
                icon={'spinner'}
                spin={true}
                title={'Loading...'}
            />
        </div>
    </Screen>
);

export default React.memo<SpinnerScreenProps>(SpinnerScreen);