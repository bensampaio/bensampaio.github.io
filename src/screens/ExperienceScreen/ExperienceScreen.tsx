import { FC, memo } from 'react';

import experience from '../../../db/experience';
import { Anchor } from '../../shared/Anchor';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Period from '../../shared/Period';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';

const ExperienceScreen: FC = () => (
    <Screen title="Experience">
        <h1>Experience</h1>
        <VerticalList>
            {experience.map((position, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className="flex items-center justify-between mb-s">
                            <div>
                                <h2 className="mb-xs">{position.title}</h2>
                                <Anchor
                                    as={ExternalLink}
                                    href={position.institution.url}
                                >
                                    {position.institution.name}
                                </Anchor>
                                , <Period {...position.period} />
                            </div>
                            {position.institution.logo && (
                                <InstitutionLogoLink
                                    {...position.institution}
                                />
                            )}
                        </header>
                        <Text>{position.summary}</Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
);

export default memo(ExperienceScreen);
