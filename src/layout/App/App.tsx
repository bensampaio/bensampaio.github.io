import { FC } from 'react';

import ErrorScreen from '../../screens/ErrorScreen';
import ErrorBoundary from '../../shared/ErrorBoundary';
import Menu from '../Menu';
import Content from '../Content';

const App: FC = () => (
    <ErrorBoundary fallback={ErrorScreen}>
        <Menu />
        <Content />
    </ErrorBoundary>
);

export default App;
