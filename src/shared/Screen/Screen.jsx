// @flow

import React, { PureComponent, type Node } from 'react';

import me from '../../../db/me';
import styles from './Screen.scss';

type ScreenProps = {
    children: Node,
    title?: string,
};

class Screen extends PureComponent<ScreenProps, {}> {

    componentDidMount() {
        const { title } = this.props;

        if (title) {
            document.title = `${title} | ${me.fullName}`;
        } else {
            document.title = me.fullName;
        }
    }

    componentWillUnmount() {
        document.title = me.fullName;
    }

    render() {
        const { children } = this.props;

        return (
            <article className={styles.container}>
                {children}
            </article>
        );
    }

}

export default Screen;