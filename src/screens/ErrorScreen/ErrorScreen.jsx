// @flow

import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './ErrorScreen.scss';
import ExternalLink from '../../shared/ExternalLink';

const handleClick = () => location.reload();

type ErrorScreenProps = {};

const ErrorScreen = () => (
    <Screen title={'Error'}>
        <div className={styles.container}>
            <h2 className={styles.heading}>Something went wrong</h2>
            <FontAwesomeIcon aria-hidden={true} className={styles.icon} icon={'bug'} />
            <div className={styles.buttonContainer}>
                <button onClick={handleClick}>Try again</button>
            </div>
            <div className={styles.messageContainer}>
                Or <ExternalLink to={'https://github.com/bensampaio/bensampaio.github.io/issues/new'}>report an issue on github</ExternalLink> with the steps you followed.
            </div>
        </div>
    </Screen>
);

export default memo<ErrorScreenProps>(ErrorScreen);