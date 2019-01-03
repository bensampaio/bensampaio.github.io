import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InfoScreen from '../InfoScreen';
import ExperienceScreen from '../ExperienceScreen';
import EducationScreen from '../EducationScreen';
import ProjectsScreen from '../ProjectsScreen';
import AboutScreen from '../AboutScreen';

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