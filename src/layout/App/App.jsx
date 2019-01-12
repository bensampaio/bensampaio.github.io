// @flow

import React, { PureComponent } from 'react';

import ErrorScreen from '../../screens/ErrorScreen';
import Menu from '../Menu';
import Content from '../Content';

type AppProps = {
    location: Object,
};

type AppState = {
    error: ?Object,
    errorInfo: ?Object,
    sidebar: boolean,
};

class App extends PureComponent<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
            // start the sidebar as expanded on desktop devices and collapsed on mobile devices
            sidebar: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        };

        //$FlowFixMe
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidCatch(error: ?Object, errorInfo: ?Object) {
        this.setState({ error, errorInfo });
    }

    toggleSidebar(event: SyntheticEvent<HTMLButtonElement>) {
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