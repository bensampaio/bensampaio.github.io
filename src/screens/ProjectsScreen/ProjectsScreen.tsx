import { FC, memo } from 'react';

import projects from '../../../db/projects';
import { Anchor } from '../../shared/Anchor';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import YouTube from '../../shared/YouTube';

const ProjectsScreen: FC = () => (
    <Screen title="Projects">
        <h1>Projects</h1>
        <VerticalList>
            {projects.map((project, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className="flex items-center justify-between mb-sm">
                            <div>
                                <h2 className="mb-xs">{project.name}</h2>
                                {project.institution?.url && (
                                    <Anchor
                                        as={ExternalLink}
                                        href={project.institution.url}
                                    >
                                        {project.institution.name}
                                    </Anchor>
                                )}
                            </div>
                            {project.institution?.logo && (
                                <InstitutionLogoLink {...project.institution} />
                            )}
                        </header>
                        {project.video && (
                            <YouTube
                                height="350px"
                                src={project.video}
                                width="100%"
                            />
                        )}
                        <Text>{project.desc}</Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
);

export default memo(ProjectsScreen);
