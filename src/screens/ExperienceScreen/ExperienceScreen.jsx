// @flow

import React from 'react';

import experience from '../../../db/experience';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Period from '../../shared/Period';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import styles from './ExperienceScreen.scss';

type ExperienceScreenProps = {};

const ExperienceScreen = () => (
    <Screen title={'Experience'}>
        <VerticalList>
            {experience.map((position, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className={styles.header}>
                            <div>
                                <h2 className={styles.heading}>{position.title}</h2>
                                <ExternalLink to={position.institution.url}>{position.institution.name}</ExternalLink>, <Period {...position.period} />
                            </div>
                            {position.institution.logo && (
                                <InstitutionLogoLink {...position.institution} />
                            )}
                        </header>
                        <Text>
                            {position.summary}
                        </Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
);

export default React.memo<ExperienceScreenProps>(ExperienceScreen);