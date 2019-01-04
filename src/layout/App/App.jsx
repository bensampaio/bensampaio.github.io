import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Content from '../Content';

const App = React.memo(() => (
    <BrowserRouter>
        <>
            <Route component={Sidebar} />
            <Route component={Content} />
        </>
    </BrowserRouter>
));

export default App;