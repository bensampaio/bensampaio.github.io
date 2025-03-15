import { FC } from 'react';

import { education } from '../../../db/education';
import { Anchor } from '../../shared/Anchor';
import { ExternalLink } from '../../shared/ExternalLink';
import { InstitutionLogoLink } from '../../shared/InstitutionLogoLink';
import { Period } from '../../shared/Period';
import { Screen } from '../../shared/Screen';
import { Text } from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';

export const EducationScreen: FC = () => (
  <Screen>
    <h1 className="font-bold text-3xl">Education</h1>
    <VerticalList className="mt-md">
      {education.map((degree, index) => (
        <VerticalListItem key={index}>
          <article>
            <header className="flex items-center justify-between mb-sm">
              <div>
                <h2 className="font-bold mb-xs text-2xl">
                  {`${degree.degree} in ${degree.field}`}
                </h2>
                <Anchor as={ExternalLink} href={degree.institution.url}>
                  {degree.institution.name}
                </Anchor>
                , <Period {...degree.period} />
              </div>
              {degree.institution.logo && (
                <InstitutionLogoLink {...degree.institution} />
              )}
            </header>
            <Text className="mt-sm">{degree.summary}</Text>
          </article>
        </VerticalListItem>
      ))}
    </VerticalList>
  </Screen>
);
