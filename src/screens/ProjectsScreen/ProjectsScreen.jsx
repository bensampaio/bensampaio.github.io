// @flow

import React, { memo } from 'react';

import projects from '../../../db/projects';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import YouTube from '../../shared/YouTube';
import styles from './ProjectsScreen.scss';

type ProjectsScreenProps = {};

const ProjectsScreen = () => (
    <Screen title={'Projects'}>
        <h1>Projects</h1>
        <VerticalList>
            {projects.map((project, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className={styles.header}>
                            <div>
                                <h2 className={styles.heading}>
                                    {project.name}
                                </h2>
                                {project.institution.url && (
                                    <ExternalLink to={project.institution.url}>
                                        {project.institution.name}
                                    </ExternalLink>
                                )}
                            </div>
                            {project.institution.logo && (
                                <InstitutionLogoLink {...project.institution} />
                            )}
                        </header>
                        {project.video && <YouTube height="350px" src={project.video} width="100%" />}
                        <Text>
                            {project.desc}
                        </Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
);

export default memo<ProjectsScreenProps>(ProjectsScreen);