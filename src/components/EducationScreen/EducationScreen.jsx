import React from 'react';

import education from '../../../db/education';

import Screen from '../Screen';
import VerticalList from '../VerticalList';
import ExternalLink from '../ExternalLink';
import Period from '../Period';
import Text from '../Text';

const EducationScreen = React.memo(() => (
    <Screen>
        <VerticalList>
            {education.map((degree, index) => (
                <li className="education-degree-item list-item" key={index}>
                    <div className="float-container">
                        <div className="left">
                            <h2>{`${degree.degree} in ${degree.field}`}</h2>
                            <ExternalLink to={degree.institution.url}>{degree.institution.name}</ExternalLink>, <Period {...degree.period} />
                        </div>
                        <div className="right">
                            {degree.institution.logo && (
                                <ExternalLink to={degree.institution.url}>
                                    <img alt={degree.institution.name} src={degree.institution.logo} />
                                </ExternalLink>
                            )}
                        </div>
                    </div>
                    <Text>
                        {degree.summary}
                    </Text>
                </li>
            ))}
        </VerticalList>
    </Screen>
));

export default EducationScreen;