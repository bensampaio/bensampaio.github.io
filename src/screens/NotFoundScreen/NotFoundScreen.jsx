// @flow

import { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './NotFoundScreen.module.scss';

type NotFoundScreenProps = {};

const NotFoundScreen = () => (
    <Screen title="Not found">
        <div className={styles.container}>
            <h2 className={styles.heading}>Page not found</h2>
            <FontAwesomeIcon
                aria-hidden={true}
                className={styles.icon}
                icon={['far', 'frown-open']}
            />
        </div>
    </Screen>
);

export default memo<NotFoundScreenProps>(NotFoundScreen);
