import React, { PureComponent } from 'react';

import Sidebar from '../Sidebar';
import Content from '../Content';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            // start the sidebar as expanded on desktop devices and collapsed on mobile devices
            sidebar: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
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