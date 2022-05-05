// @flow

import { memo } from 'react';

import education from '../../../db/education';
import ExternalLink from '../../shared/ExternalLink';
import InstitutionLogoLink from '../../shared/InstitutionLogoLink';
import Period from '../../shared/Period';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import { VerticalList, VerticalListItem } from '../../shared/VerticalList';
import styles from './EducationScreen.module.scss';

type EducationScreenProps = {};

const EducationScreen = () => (
    <Screen title="Education">
        <h1>Education</h1>
        <VerticalList>
            {education.map((degree, index) => (
                <VerticalListItem key={index}>
                    <article>
                        <header className={styles.header}>
                            <div>
                                <h2
                                    className={styles.heading}
                                >{`${degree.degree} in ${degree.field}`}</h2>
                                <ExternalLink to={degree.institution.url}>
                                    {degree.institution.name}
                                </ExternalLink>
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

export default memo<EducationScreenProps>(EducationScreen);
