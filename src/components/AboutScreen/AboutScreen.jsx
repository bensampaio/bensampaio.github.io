import classnames from 'classnames';
import React from 'react';

import about from '../../../db/about.json';

import Screen from '../Screen';
import Text from '../Text';
import HorizontalList from '../HorizontalList';
import ExternalLink from '../ExternalLink';

const AboutScreen = React.memo(() => (
    <Screen>
        <h2>Goal</h2>
        <Text>{about.goal}</Text>

        <h2>Technologies</h2>
        <Text>{about.technologies.summary}</Text>

        <h3>Frontend</h3>
        <HorizontalList>
            {about.technologies.client.map((tech, index) => (
                <li className={classnames('about-technology-item', { 'list-item': !tech.separator, 'separator': tech.separator })} key={index}>
                    <ExternalLink to={tech.url}>
                        <img src={`public/img/technologies/${tech.id}.png`} />
                        <strong>{tech.desc}</strong>
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>


        <h3>Backend</h3>
        <HorizontalList>
            {about.technologies.server.map((tech, index) => (
                <li className={classnames('about-technology-item', { 'list-item': !tech.separator, 'separator': tech.separator })} key={index}>
                    <ExternalLink to={tech.url}>
                        <img src={`public/img/technologies/${tech.id}.png`} />
                        <strong>{tech.desc}</strong>
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>

        <h3>Tools</h3>
        <HorizontalList>
            {about.technologies.tools.map((tech, index) => (
                <li className={classnames('about-technology-item', { 'list-item': !tech.separator, 'separator': tech.separator })} key={index}>
                    <ExternalLink to={tech.url}>
                        <img src={`public/img/technologies/${tech.id}.png`} />
                        <strong>{tech.desc}</strong>
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>

        <h2>Credits</h2>

        <h3>Developers</h3>
        <HorizontalList>
            {about.credits.developers.map((developer, index) => (
                <li key={index}>
                    <ExternalLink to={developer.url}>
                        {developer.name}
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>

        <h3>Designers</h3>
        <HorizontalList>
            {about.credits.designers.map((designer, index) => (
                <li key={index}>
                    <ExternalLink to={designer.url}>
                        {designer.name}
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>

        <h3>Others</h3>
        <HorizontalList>
            {about.credits.others.map((other, index) => (
                <li key={index}>
                    <ExternalLink to={other.url}>
                        {other.name}
                    </ExternalLink>
                    {other.desc && <span> - {other.desc} {other.item && <ExternalLink to={other.item.url}>{other.item.name}</ExternalLink>}</span>}
                </li>
            ))}
        </HorizontalList>
    </Screen>
));

export default AboutScreen;