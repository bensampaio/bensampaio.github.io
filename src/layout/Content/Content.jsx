import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InfoScreen from '../../screens/InfoScreen';
import ExperienceScreen from '../../screens/ExperienceScreen';
import EducationScreen from '../../screens/EducationScreen';
import ProjectsScreen from '../../screens/ProjectsScreen';
import AboutScreen from '../../screens/AboutScreen';

import styles from './Content.scss';

const Content = () => (
    <main className={styles.container}>
        <Switch>
            <Route component={InfoScreen} exact={true} path={'/'} />
            <Route component={ExperienceScreen} exact={true} path={'/experience'} />
            <Route component={EducationScreen} exact={true} path={'/education'} />
            <Route component={ProjectsScreen} exact={true} path={'/projects'} />
            <Route component={AboutScreen} exact={true} path={'/about'} />
        </Switch>
    </main>
);

export default Content;