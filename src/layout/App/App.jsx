import React, { PureComponent } from 'react';

import Sidebar from '../Sidebar';
import Content from '../Content';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            sidebar: false,
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(event) {
        event.currentTarget.blur();

        this.setState((prevState) => ({
            sidebar: !prevState.sidebar,
        }));
    }

    render() {
        const { location } = this.props;
        const { sidebar } = this.state;

        return (
            <>
                <Sidebar location={location} expanded={sidebar} onToggle={this.toggleSidebar} />
                <Content location={location} expanded={!sidebar} />
            </>
        );
    }

}

export default App;