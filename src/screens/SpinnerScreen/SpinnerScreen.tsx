import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import styles from './SpinnerScreen.module.scss';

const SpinnerScreen: FC = () => (
    <Screen title="Waiting">
        <div className={styles.container}>
            <FontAwesomeIcon
                aria-hidden={true}
                className={styles.icon}
                fixedWidth={true}
                icon="spinner"
                spin={true}
                title="Loading..."
            />
        </div>
    </Screen>
);

export default SpinnerScreen;
