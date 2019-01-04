import React from 'react';

import education from '../../../db/education';
import Screen from '../../shared/Screen';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import ExternalLink from '../../shared/ExternalLink';
import Period from '../../shared/Period';
import Text from '../../shared/Text';
import styles from './EducationScreen.scss';

const EducationScreen = React.memo(() => (
    <Screen>
        <VerticalList>
            {education.map((degree, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className={styles.header}>
                            <div>
                                <h2 className={styles.heading}>{`${degree.degree} in ${degree.field}`}</h2>
                                <ExternalLink to={degree.institution.url}>{degree.institution.name}</ExternalLink>, <Period {...degree.period} />
                            </div>
                            {degree.institution.logo && (
                                <div>
                                    <ExternalLink to={degree.institution.url}>
                                        <img alt={degree.institution.name} className={styles.institutionLogo} src={degree.institution.logo} />
                                    </ExternalLink>
                                </div>
                            )}
                        </header>
                        <Text>
                            {degree.summary}
                        </Text>
                    </article>
                </VerticalListItem>
            ))}
        </VerticalList>
    </Screen>
));

export default EducationScreen;