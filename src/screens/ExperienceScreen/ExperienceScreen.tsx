import { FC } from 'react';

import experience from '../../../db/experience';
import { Anchor } from '../../shared/Anchor';
import { ExternalLink } from '../../shared/ExternalLink';
import { InstitutionLogoLink } from '../../shared/InstitutionLogoLink';
import { Period } from '../../shared/Period';
import { Screen } from '../../shared/Screen';
import { Text } from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';

export const ExperienceScreen: FC = () => (
  <Screen>
    <h1 className="font-bold text-3xl">Experience</h1>
    <VerticalList className="mt-md">
      {experience.map((position, index) => (
        <VerticalListItem key={index}>
          <article>
            <header className="flex items-center justify-between mb-s">
              <div>
                <h2 className="font-bold mb-xs text-2xl">{position.title}</h2>
                <Anchor as={ExternalLink} href={position.institution.url}>
                  {position.institution.name}
                </Anchor>
                , <Period {...position.period} />
              </div>
              {position.institution.logo && (
                <InstitutionLogoLink {...position.institution} />
              )}
            </header>
            <Text className="mt-sm">{position.summary}</Text>
          </article>
        </VerticalListItem>
      ))}
    </VerticalList>
  </Screen>
);
