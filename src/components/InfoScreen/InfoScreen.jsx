import React from 'react';

import info from '../../../db/info/index.js';

import Screen from '../Screen';
import ExternalLink from '../ExternalLink';
import { HorizontalList, HorizontalListItem } from '../HorizontalList';
import Text from '../Text';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const InfoScreen = React.memo(() => (
    <Screen>
        <h2>Summary</h2>
        <Text>
            {info.summary}
        </Text>

        <h2>Skills</h2>
        <HorizontalList>
            {info.skills.slice(0, 14).map((skill, index) => (
                <HorizontalListItem className="info-skill-item list-item" key={index}>
                    <strong>
                        <FontAwesomeIcon icon={skill.code} />
                        <span>{skill.name}</span>
                    </strong>
                </HorizontalListItem>
            ))}

            <HorizontalListItem>
                <HorizontalList>
                    {info.skills.slice(15).map((skill, index) => (
                        <HorizontalListItem className="list-item" key={index}>
                            <FontAwesomeIcon icon={skill.code} />
                            <span>{skill.name}</span>
                        </HorizontalListItem>
                    ))}
                </HorizontalList>
                <FontAwesomeIcon icon={'chevron-down'} />
                <FontAwesomeIcon icon={'chevron-up'} />
            </HorizontalListItem>
        </HorizontalList>

        <h2>Languages</h2>
        <HorizontalList>
            {info.languages.map((lang, index) => (
                <HorizontalListItem className="list-item" key={index}>
                    <div className="lang-flag">
                        <img className="flag" src={lang.flag} />
                    </div>
                    <div className="lang-data">
                        <div className="lang-name">
                            <strong>{lang.name}</strong>
                        </div>
                        <div className="lang-level">
                            {lang.level}
                        </div>
                    </div>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h2>Social</h2>
        <HorizontalList>
            {info.pages.map((page, index) => (
                <HorizontalListItem className="info-social-item list-item" key={index}>
                    <ExternalLink href={page.url}>
                        <FontAwesomeIcon icon={page.icon} />
                        {page.name}
                    </ExternalLink>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h2>Interests</h2>
        <HorizontalList>
            {info.interests.map((interest, index) => (
                <HorizontalListItem className="info-interest-item list-item" key={index}>
                    {interest}
                </HorizontalListItem>
            ))}
        </HorizontalList>
    </Screen>
));

export default InfoScreen;