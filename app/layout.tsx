import './layout.scss';

import cn from 'classnames';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Metadata } from 'next';

import { FC, ReactNode } from 'react';
import { LOCALE } from '../src/shared/constants';

import { me } from '../db/me';
import { Menu } from '../src/layout/Menu';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: `%s | ${me.fullName}`,
    default: me.fullName,
  },
  description: 'Bruno Sampaio personal website',
};

type Props = {
  children: ReactNode;
};

const App: FC<Props> = ({ children }) => (
  <html className="h-full overflow-y-scroll" lang={LOCALE}>
    <body className="border-0 h-full m-0 p-0">
      <Menu />
      <main className={cn('min-h-screen', 'mt-3xl', 'p-sm')}>{children}</main>
    </body>
  </html>
);

export default App;
