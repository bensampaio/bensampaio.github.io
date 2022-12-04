import cn from 'classnames';
import { FC, memo, useCallback, useState } from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import info from '../../../db/info';
import ExternalLink from '../../shared/ExternalLink';
import {
    HorizontalList,
    HorizontalListItem,
} from '../../shared/HorizontalList';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';

const getSocialColorClassName = (name: string): string => {
    switch (name) {
        case 'Facebook':
            return 'text-facebook';

        case 'Github':
            return 'text-github';

        case 'LinkedIn':
            return 'text-linkedin';

        case 'Twitter':
            return 'text-twitter';

        default:
            return 'text-inherit';
    }
};

const InfoScreen: FC = () => {
    const [showExtraSkills, setShowExtraSkills] = useState(false);

    const toggleExtraSkills = useCallback(() => {
        setShowExtraSkills(!showExtraSkills);
    }, [showExtraSkills]);

    return (
        <Screen>
            <h2>Summary</h2>
            <Text>{info.summary}</Text>

            <h2>Skills</h2>
            <HorizontalList>
                {info.skills.slice(0, 15).map(({ icon, name }, index) => (
                    <HorizontalListItem key={index}>
                        <strong>
                            {icon && (
                                <FontAwesomeIcon
                                    aria-hidden={true}
                                    icon={['fab', icon as IconName]}
                                />
                            )}{' '}
                            {name}
                        </strong>
                    </HorizontalListItem>
                ))}

                <HorizontalListItem>
                    <div className="bg-gray-e border border-solid border-gray-d text-gray-4">
                        <div
                            className={cn(
                                'transition-h',
                                'duration-200',
                                'ease-in-out',
                                {
                                    'h-0 overflow-hidden': !showExtraSkills,
                                }
                            )}
                        >
                            <HorizontalList>
                                {info.skills
                                    .slice(15)
                                    .map(({ icon, name }, index) => (
                                        <HorizontalListItem key={index}>
                                            {icon && (
                                                <FontAwesomeIcon
                                                    aria-hidden={true}
                                                    icon={[
                                                        'fab',
                                                        icon as IconName,
                                                    ]}
                                                />
                                            )}{' '}
                                            {name}
                                        </HorizontalListItem>
                                    ))}
                            </HorizontalList>
                        </div>
                        <button
                            className="bg-transparent border-0 cursor-pointer p-0 text-inherit text-base w-full"
                            title="Expand / Collapse"
                            onClick={toggleExtraSkills}
                        >
                            <FontAwesomeIcon
                                aria-hidden={true}
                                className={cn({
                                    hidden: showExtraSkills,
                                })}
                                icon="chevron-down"
                            />
                            <FontAwesomeIcon
                                aria-hidden={true}
                                className={cn({
                                    hidden: !showExtraSkills,
                                })}
                                icon="chevron-up"
                            />
                        </button>
                    </div>
                </HorizontalListItem>
            </HorizontalList>

            <h2>Languages</h2>
            <HorizontalList>
                {info.languages.map((lang, index) => (
                    <HorizontalListItem key={index}>
                        <div className="flex items-center gap-x-xs">
                            <img alt="" aria-hidden={true} src={lang.flag} />
                            <div>
                                <div>
                                    <strong>{lang.name}</strong>
                                </div>
                                <div className="text-xs">{lang.level}</div>
                            </div>
                        </div>
                    </HorizontalListItem>
                ))}
            </HorizontalList>

            <h2>Social</h2>
            <HorizontalList>
                {info.pages.map(({ icon, name, url }, index) => (
                    <HorizontalListItem key={index}>
                        <ExternalLink
                            className={cn(
                                'flex',
                                'items-center',
                                'gap-x-xs',
                                'no-underline',
                                'text-inherit',
                                'visited:text-inherit'
                            )}
                            href={url}
                        >
                            <FontAwesomeIcon
                                aria-hidden={true}
                                className={getSocialColorClassName(name)}
                                icon={['fab', icon as IconName]}
                            />
                            <span>{name}</span>
                        </ExternalLink>
                    </HorizontalListItem>
                ))}
            </HorizontalList>

            <h2>Interests</h2>
            <HorizontalList>
                {info.interests.map((interest, index) => (
                    <HorizontalListItem key={index}>
                        {interest}
                    </HorizontalListItem>
                ))}
            </HorizontalList>
        </Screen>
    );
};

export default memo(InfoScreen);
