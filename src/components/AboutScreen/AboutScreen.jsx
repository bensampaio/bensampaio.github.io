import classnames from 'classnames';
import React from 'react';

import about from '../../../db/about';

import Screen from '../Screen';
import Text from '../Text';
import { HorizontalList, HorizontalListItem } from '../HorizontalList';
import ExternalLink from '../ExternalLink';

const Technology = ({ data }) => {
    if (data.separator) {
        return (
            <HorizontalListItem className={classnames('about-technology-item', 'separator')} />
        );
    }
    return (
        <HorizontalListItem className={classnames('about-technology-item', 'list-item')}>
            <ExternalLink to={data.url}>
                <img alt={data.id} src={data.logo} />
                <strong>{data.desc}</strong>
            </ExternalLink>
        </HorizontalListItem>
    );
};

const AboutScreen = React.memo(() => (
    <Screen>
        <h2>Goal</h2>
        <Text>{about.goal}</Text>

        <h2>Technologies</h2>
        <Text>{about.technologies.summary}</Text>

        <h3>Frontend</h3>
        <HorizontalList>
            {about.technologies.client.map((tech, index) => <Technology data={tech} key={index} />)}
        </HorizontalList>


        <h3>Backend</h3>
        <HorizontalList>
            {about.technologies.server.map((tech, index) => <Technology data={tech} key={index} />)}
        </HorizontalList>

        <h3>Tools</h3>
        <HorizontalList>
            {about.technologies.tools.map((tech, index) => <Technology data={tech} key={index} />)}
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
                    <ExternalLink to={other.url}>
                        {other.name}
                    </ExternalLink>
                    {other.desc && <span> - {other.desc} {other.item && <ExternalLink to={other.item.url}>{other.item.name}</ExternalLink>}</span>}
                </HorizontalListItem>
            ))}
        </HorizontalList>
    </Screen>
));

export default AboutScreen;