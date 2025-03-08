import { FC, memo } from 'react';
import { faBug } from '@fortawesome/free-solid-svg-icons';

import { Anchor } from '../../shared/Anchor';
import { Icon } from '../../shared/Icon';
import ExternalLink from '../../shared/ExternalLink';
import Screen from '../../shared/Screen';

const handleClick = () => location.reload();

const ErrorScreen: FC = () => (
    <Screen>
        <div className="text-center">
            <h2 className="text-7xl">Something went wrong</h2>
            <Icon aria-hidden={true} className="text-12xl" icon={faBug} />
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
