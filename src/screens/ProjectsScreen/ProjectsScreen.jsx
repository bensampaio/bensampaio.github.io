import React from 'react';

import projects from '../../../db/projects';
import Screen from '../../shared/Screen';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import ExternalLink from '../../shared/ExternalLink';
import Text from '../../shared/Text';
import YouTube from '../../shared/YouTube';
import styles from './ProjectsScreen.scss';

const ProjectsScreen = React.memo(() => (
    <Screen>
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
                                <div>
                                    <ExternalLink to={project.institution.url}>
                                        <img alt={project.institution.name} className={styles.institutionLogo} src={project.institution.logo} />
                                    </ExternalLink>
                                </div>
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
));

export default ProjectsScreen;