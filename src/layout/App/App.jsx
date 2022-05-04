// @flow

import { PureComponent } from 'react';

import ErrorScreen from '../../screens/ErrorScreen';
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
        };
    }

    componentDidCatch(error: ?Object, errorInfo: ?Object) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { location } = this.props;
        const { error, errorInfo } = this.state;

        if (error || errorInfo) {
            return <ErrorScreen />;
        }

        return (
            <>
                <Menu location={location} />
                <Content location={location} />
            </>
        );
    }
}

export default App;
