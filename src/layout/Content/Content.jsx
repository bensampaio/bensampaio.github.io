// @flow

import classnames from 'classnames';
import React, { lazy, memo, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import SpinnerScreen from '../../screens/SpinnerScreen';
import styles from './Content.scss';

const AboutScreen = lazy(() => import('../../screens/AboutScreen'));
const EducationScreen = lazy(() => import('../../screens/EducationScreen'));
const ExperienceScreen = lazy(() => import('../../screens/ExperienceScreen'));
const InfoScreen = lazy(() => import('../../screens/InfoScreen'));
const NotFoundScreen = lazy(() => import('../../screens/NotFoundScreen'));
const ProjectsScreen = lazy(() => import('../../screens/ProjectsScreen'));

type ContentProps = {
    expanded: boolean,
};

const Content = ({ expanded }: ContentProps) => {
    const containerClassNames = classnames(styles.container, {
        [styles.containerCollapsed]: !expanded,
        [styles.containerExpanded]: expanded,
    });

    return (
        <main className={containerClassNames}>
            <Suspense fallback={<SpinnerScreen />}>
                <Switch>
                    <Route component={InfoScreen} exact={true} path={'/'} />
                    <Route component={ExperienceScreen} exact={true} path={'/experience'} />
                    <Route component={EducationScreen} exact={true} path={'/education'} />
                    <Route component={ProjectsScreen} exact={true} path={'/projects'} />
                    <Route component={AboutScreen} exact={true} path={'/about'} />
                    <Route component={NotFoundScreen} />
                </Switch>
            </Suspense>
        </main>
    );
};

export default memo<ContentProps>(Content);