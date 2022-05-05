import { ComponentType, ErrorInfo, PureComponent, ReactNode } from 'react';

type Props = {
    children: ReactNode,
    fallback: ComponentType,
};

type State = {
    error: null | Error,
    errorInfo?: null | ErrorInfo
};

class ErrorBoundary extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { children, fallback: Fallback } = this.props;
        const { error, errorInfo } = this.state;

        if (error || errorInfo) {
            return <Fallback />;
        }

        return children;
    }
}

export default ErrorBoundary;
