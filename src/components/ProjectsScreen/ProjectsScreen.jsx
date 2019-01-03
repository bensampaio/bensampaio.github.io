import React from 'react';

import projects from '../../../db/projects.json';

import Screen from '../Screen';
import VerticalList from '../VerticalList';
import ExternalLink from '../ExternalLink';
import Text from '../Text';
import YouTube from '../YouTube';

const ProjectsScreen = React.memo(() => (
    <Screen>
        <VerticalList>
            {projects.map((project, index) => (
                <li className="project-item list-item" key={index}>
                    <div className="float-container">
                        <div className="left">
                            <h2>
                                <ExternalLink to={project.url}>
                                    {project.name}
                                </ExternalLink>
                            </h2>
                            {project.institution.url && (
                                <ExternalLink to={project.institution.url}>
                                    {project.institution.name}
                                </ExternalLink>
                            )}
                        </div>
                        <div className="right">
                            {project.institution.logo && (
                                <ExternalLink to={project.institution.url}>
                                    <img alt={project.institution.name} src={project.institution.logo} />
                                </ExternalLink>
                            )}
                        </div>
                    </div>
                    {project.video && <YouTube src={project.video} />}
                    <Text>
                        {project.desc}
                    </Text>
                </li>
            ))}
        </VerticalList>
    </Screen>
));

export default ProjectsScreen;