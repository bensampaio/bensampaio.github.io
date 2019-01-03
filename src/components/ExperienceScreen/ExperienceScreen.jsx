import React from 'react';

import experience from '../../../db/experience.json';

import Screen from '../Screen';
import ExternalLink from '../ExternalLink';
import VerticalList from '../VerticalList';
import Period from '../Period';
import Text from '../Text';

const ExperienceScreen = React.memo(() => (
    <Screen title={'Experience'}>
        <VerticalList>
            {experience.map((position, index) => (
                <li className="experience-position-item list-item" key={index}>
                    <div className="float-container">
                        <div className="left">
                            <h2>{position.title}</h2>
                            <ExternalLink to={position.institution.url}>{position.institution.name}</ExternalLink>, <Period {...position.period} />
                        </div>
                        <div className="right">
                            {position.institution.logo && (
                                <ExternalLink to={position.institution.url}>
                                    <img alt={position.institution.name} src={position.institution.logo} />
                                </ExternalLink>
                            )}
                        </div>
                    </div>
                    <Text>
                        {position.summary}
                    </Text>
                </li>
            ))}
        </VerticalList>
    </Screen>
));

export default ExperienceScreen;