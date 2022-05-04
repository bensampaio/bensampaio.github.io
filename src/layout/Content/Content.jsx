// @flow

import { lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SpinnerScreen from '../../screens/SpinnerScreen';
import styles from './Content.scss';

const AboutScreen = lazy(() => import('../../screens/AboutScreen'));
const EducationScreen = lazy(() => import('../../screens/EducationScreen'));
const ExperienceScreen = lazy(() => import('../../screens/ExperienceScreen'));
const InfoScreen = lazy(() => import('../../screens/InfoScreen'));
const NotFoundScreen = lazy(() => import('../../screens/NotFoundScreen'));
const ProjectsScreen = lazy(() => import('../../screens/ProjectsScreen'));

const Content = () => (
    <main className={styles.container}>
        <Suspense fallback={<SpinnerScreen />}>
            <Routes>
                <Route element={<InfoScreen />} path="/" />
                <Route element={<ExperienceScreen />} path="/experience" />
                <Route element={<EducationScreen />} path="/education" />
                <Route element={<ProjectsScreen />} path="/projects" />
                <Route element={<AboutScreen />} path="/about" />
                <Route element={<NotFoundScreen />} />
            </Routes>
        </Suspense>
    </main>
);

export default memo(Content);
