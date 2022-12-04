import { FC, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Screen from '../../shared/Screen';
import ExternalLink from '../../shared/ExternalLink';
import { Anchor } from '../../shared/Anchor';

const handleClick = () => location.reload();

const ErrorScreen: FC = () => (
    <Screen title="Error">
        <div className="text-center">
            <h2 className="text-7xl">Something went wrong</h2>
            <FontAwesomeIcon
                aria-hidden={true}
                className="text-12xl"
                icon="bug"
            />
            <div className="mt-lg">
                <button onClick={handleClick}>Try again</button>
            </div>
            <div className="mt-lg">
                Or{' '}
                <Anchor
                    as={ExternalLink}
                    href="https://github.com/bensampaio/bensampaio.github.io/issues/new"
                >
                    report an issue on github
                </Anchor>{' '}
                with the steps you followed.
            </div>
        </div>
    </Screen>
);

export default memo(ErrorScreen);
