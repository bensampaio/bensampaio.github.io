import { FC, memo } from 'react';

import education from '../../../db/education';
import { Anchor } from '../../shared/Anchor';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Period from '../../shared/Period';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';

const EducationScreen: FC = () => (
    <Screen title="Education">
        <h1>Education</h1>
        <VerticalList>
            {education.map((degree, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className="flex items-center justify-between mb-sm">
                            <div>
                                <h2 className="mb-xs">
                                    {`${degree.degree} in ${degree.field}`}
                                </h2>
                                <Anchor
                                    as={ExternalLink}
                                    href={degree.institution.url}
                                >
                                    {degree.institution.name}
                                </Anchor>
                                , <Period {...degree.period} />
                            </div>
                            {degree.institution.logo && (
                                <InstitutionLogoLink {...degree.institution} />
                            )}
                        </header>
                        <Text>{degree.summary}</Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
);

export default memo(EducationScreen);
