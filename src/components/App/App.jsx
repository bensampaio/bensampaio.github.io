import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Content from '../Content';

const App = React.memo(() => (
    <BrowserRouter>
        <>
            <Sidebar />
            <Content />
        </>
    </BrowserRouter>
));

export default App;