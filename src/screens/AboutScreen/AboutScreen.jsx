// @flow

import React, { memo } from 'react';

import about from '../../../db/about';
import ExternalLink from '../../shared/ExternalLink';
import {
    HorizontalList,
    HorizontalListItem,
} from '../../shared/HorizontalList';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import styles from './AboutScreen.scss';

type AboutScreenProps = {};

type TechnologyProps = {
    desc: string,
    id: string,
    logo: string,
    url: string,
};

const Technology = memo<TechnologyProps>(
    ({ desc, id, logo, url }: TechnologyProps) => (
        <HorizontalListItem>
            <ExternalLink className={styles.techLink} to={url}>
                <img alt={id} className={styles.techLogo} src={logo} />
                <span className={styles.techName}>{desc}</span>
            </ExternalLink>
        </HorizontalListItem>
    )
);

const AboutScreen = () => (
    <Screen title="About">
        <h1>About</h1>

        <h2>Goal</h2>
        <Text>{about.goal}</Text>

        <h2>Technologies</h2>
        <Text>{about.technologies.summary}</Text>

        <h3>Frontend</h3>
        <HorizontalList>
            {about.technologies.client.map((tech, index) => (
                <Technology {...tech} key={index} />
            ))}
        </HorizontalList>

        <h3>Tools</h3>
        <HorizontalList>
            {about.technologies.tools.map((tech, index) => (
                <Technology {...tech} key={index} />
            ))}
        </HorizontalList>

        <h2>Credits</h2>

        <h3>Developers</h3>
        <HorizontalList>
            {about.credits.developers.map((developer, index) => (
                <HorizontalListItem key={index}>
                    <ExternalLink to={developer.url}>
                        {developer.name}
                    </ExternalLink>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h3>Designers</h3>
        <HorizontalList>
            {about.credits.designers.map((designer, index) => (
                <HorizontalListItem key={index}>
                    <ExternalLink to={designer.url}>
                        {designer.name}
                    </ExternalLink>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h3>Others</h3>
        <HorizontalList>
            {about.credits.others.map((other, index) => (
                <HorizontalListItem key={index}>
                    <ExternalLink to={other.url}>{other.name}</ExternalLink>
                    {other.desc && (
                        <span>
                            {' '}
                            - {other.desc}{' '}
                            {other.item && (
                                <ExternalLink to={other.item.url}>
                                    {other.item.name}
                                </ExternalLink>
                            )}
                        </span>
                    )}
                </HorizontalListItem>
            ))}
        </HorizontalList>
    </Screen>
);

export default memo<AboutScreenProps>(AboutScreen);
