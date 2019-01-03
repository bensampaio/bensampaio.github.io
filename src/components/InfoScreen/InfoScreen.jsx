import React from 'react';

import info from '../../../db/info';

import Screen from '../Screen';
import ExternalLink from '../ExternalLink';
import HorizontalList from '../HorizontalList';
import Text from '../Text';

const InfoScreen = React.memo(() => (
    <Screen>
        <h2>Summary</h2>
        <Text>
            {info.summary}
        </Text>

        <h2>Skills</h2>
        <HorizontalList>
            {info.skills.slice(0, 14).map((skill, index) => (
                <li className="info-skill-item list-item" key={index}>
                    <strong>
                        <span className={`fa fa-${skill.code}`}></span>
                        <span>{skill.name}</span>
                    </strong>
                </li>
            ))}

            <li className="section-list-more">
                <ul className="section-boxes-hlist">
                    {info.skills.slice(15).map((skill, index) => (
                        <li className="list-item" key={index}>
                            <span className={`fa fa-${skill.code}`}></span>
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
                <span className="fa fa-chevron-down"></span>
                <span className="fa fa-chevron-up"></span>
            </li>
        </HorizontalList>

        <h2>Languages</h2>
        <HorizontalList>
            {info.languages.map((lang, index) => (
                <li className="list-item" key={index}>
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
                </li>
            ))}
        </HorizontalList>

        <h2>Social</h2>
        <HorizontalList>
            {info.pages.map((page, index) => (
                <li className="info-social-item list-item" key={index}>
                    <ExternalLink href={page.url}>
                        <span className={`fa ${page.icon}`}></span>
                        {page.name}
                    </ExternalLink>
                </li>
            ))}
        </HorizontalList>

        <h2>Interests</h2>
        <HorizontalList>
            {info.interests.map((interest, index) => (
                <li className="info-interest-item list-item" key={index}>
                    {interest}
                </li>
            ))}
        </HorizontalList>
    </Screen>
));

export default InfoScreen;