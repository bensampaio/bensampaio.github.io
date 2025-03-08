import { FC } from 'react';
import { faFrownOpen } from '@fortawesome/free-regular-svg-icons';

import { Icon } from '../../shared/Icon';
import { Screen } from '../../shared/Screen';

export const NotFoundScreen: FC = () => (
  <Screen>
    <div className="text-center">
      <h2 className="text-7xl">Page not found</h2>
      <Icon aria-hidden={true} className="mt-xl text-12xl" icon={faFrownOpen} />
    </div>
  </Screen>
);
