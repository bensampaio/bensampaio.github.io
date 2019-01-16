// @flow

import React, { PureComponent } from 'react';

import ErrorScreen from '../../screens/ErrorScreen';
import { isMobile } from '../../shared/deviceHelper.mjs';
import Menu from '../Menu';
import Content from '../Content';

type AppProps = {
    location: Object,
};

type AppState = {
    error: ?Object,
    errorInfo: ?Object,
    menu: boolean,
};

class App extends PureComponent<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
            // start the menu as expanded on desktop devices and collapsed on mobile devices
            menu: !isMobile(),
        };

        //$FlowFixMe
        this.handleMenuSelect = this.handleMenuSelect.bind(this);
        this.handleMenuToggle = this.handleMenuToggle.bind(this);
    }

    componentDidCatch(error: ?Object, errorInfo: ?Object) {
        this.setState({ error, errorInfo });
    }

    handleMenuSelect() {
        if (isMobile()) {
            this.setState({
                menu: false,
            });
        }
    }

    handleMenuToggle(event: SyntheticEvent<HTMLButtonElement>) {
        event.currentTarget.blur();

        this.setState((prevState) => ({
            menu: !prevState.menu,
        }));
    }

    render() {
        const { location } = this.props;
        const { error, errorInfo, menu } = this.state;

        if (error || errorInfo) {
            return <ErrorScreen />;
        }

        return (
            <>
                <Menu location={location} expanded={menu} onSelect={this.handleMenuSelect} onToggle={this.handleMenuToggle} />
                <Content location={location} expanded={!menu} />
            </>
        );
    }

}

export default App;