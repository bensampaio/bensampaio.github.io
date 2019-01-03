import React, { PureComponent } from 'react';

import me from '../../../db/me';

class Screen extends PureComponent {

    componentDidMount() {
        const { title } = this.props;

        if (title) {
            document.title = `${title} | ${me.fullName}`;
        }
    }

    componentWillUnmount() {
        document.title = me.fullName;
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