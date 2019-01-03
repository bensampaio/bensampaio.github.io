import React, { PureComponent } from 'react';

import my from '../../../db/my.json';

class Screen extends PureComponent {

    componentDidMount() {
        const { title } = this.props;

        if (title) {
            document.title = `${title} | ${my.fullName}`;
        }
    }

    componentWillUnmount() {
        document.title = my.fullName;
    }

    render() {
        const { children } = this.props;

        return (
            <article>
                {children}
            </article>
        );
    }

}

export default Screen;