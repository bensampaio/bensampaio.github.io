import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';

const SpinnerScreen: FC = () => (
    <Screen title="Waiting">
        <div className="flex items-center justify-center">
            <FontAwesomeIcon
                aria-hidden={true}
                className="text-spinner"
                fixedWidth={true}
                icon="spinner"
                spin={true}
                title="Loading..."
            />
        </div>
    </Screen>
);

export default SpinnerScreen;
