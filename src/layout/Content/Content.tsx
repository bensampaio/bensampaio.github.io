import cn from 'classnames';
import { FC, lazy, memo, Suspense } from 'react';
import { Route, Routes } from 'react-router';

import SpinnerScreen from '../../screens/SpinnerScreen';

const AboutScreen = lazy(() => import('../../screens/AboutScreen'));
const EducationScreen = lazy(() => import('../../screens/EducationScreen'));
const ExperienceScreen = lazy(() => import('../../screens/ExperienceScreen'));
const InfoScreen = lazy(() => import('../../screens/InfoScreen'));
const NotFoundScreen = lazy(() => import('../../screens/NotFoundScreen'));
const ProjectsScreen = lazy(() => import('../../screens/ProjectsScreen'));

const Content: FC = () => (
    <main className={cn('min-h-screen', 'mt-3xl', 'p-sm')}>
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
