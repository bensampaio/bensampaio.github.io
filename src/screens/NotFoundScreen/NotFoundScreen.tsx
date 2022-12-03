import { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';

const NotFoundScreen: FC = () => (
    <Screen title="Not found">
        <div className="text-center">
            <h2 className="text-7xl">Page not found</h2>
            <FontAwesomeIcon
                aria-hidden={true}
                className="text-12xl"
                icon={['far', 'frown-open']}
            />
        </div>
    </Screen>
);

export default memo(NotFoundScreen);
