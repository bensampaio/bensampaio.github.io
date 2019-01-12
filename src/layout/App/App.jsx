import React, { PureComponent } from 'react';

import ErrorScreen from '../../screens/ErrorScreen';
import Menu from '../Menu';
import Content from '../Content';

class App extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
            // start the sidebar as expanded on desktop devices and collapsed on mobile devices
            sidebar: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        };

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    toggleSidebar(event) {
        event.currentTarget.blur();

        this.setState((prevState) => ({
            sidebar: !prevState.sidebar,
        }));
    }

    render() {
        const { location } = this.props;
        const { error, errorInfo, sidebar } = this.state;

        if (error || errorInfo) {
            return <ErrorScreen />;
        }

        return (
            <>
                <Menu location={location} expanded={sidebar} onToggle={this.toggleSidebar} />
                <Content location={location} expanded={!sidebar} />
            </>
        );
    }

}

export default App;