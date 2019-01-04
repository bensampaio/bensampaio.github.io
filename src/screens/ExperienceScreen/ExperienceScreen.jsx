import React from 'react';

import experience from '../../../db/experience';
import Screen from '../../shared/Screen';
import ExternalLink from '../../shared/ExternalLink';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import Period from '../../shared/Period';
import Text from '../../shared/Text';
import styles from './ExperienceScreen.scss';

const ExperienceScreen = React.memo(() => (
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
                                <div>
                                    <ExternalLink to={position.institution.url}>
                                        <img alt={position.institution.name} className={styles.institutionLogo} src={position.institution.logo} />
                                    </ExternalLink>
                                </div>
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
));

export default ExperienceScreen;