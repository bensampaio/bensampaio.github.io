import classnames from 'classnames';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import info from '../../../db/info';
import Screen from '../../shared/Screen';
import ExternalLink from '../../shared/ExternalLink';
import { HorizontalList, HorizontalListItem } from '../../shared/HorizontalList';
import Text from '../../shared/Text';
import styles from './InfoScreen.scss';

class InfoScreen extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showExtraSkills: false,
        };

        this.toggleExtraSkills = this.toggleExtraSkills.bind(this);
    }

    toggleExtraSkills() {
        this.setState((prevState) => ({
            showExtraSkills: !prevState.showExtraSkills,
        }));
    }

    render() {
        const { showExtraSkills } = this.state;

        return (
            <Screen>
                <h2>Summary</h2>
                <Text>
                    {info.summary}
                </Text>

                <h2>Skills</h2>
                <HorizontalList>
                    {info.skills.slice(0, 15).map(({ icon, name }, index) => (
                        <HorizontalListItem key={index}>
                            <strong>
                                {icon && <FontAwesomeIcon icon={['fab', icon]} />} {name}
                            </strong>
                        </HorizontalListItem>
                    ))}

                    <HorizontalListItem>
                        <div className={styles.extraSkills}>
                            <div className={classnames(styles.extraSkillsContent, { [styles.extraSkillsContentHide]: !showExtraSkills })}>
                                <HorizontalList>
                                    {info.skills.slice(15).map(({ icon, name }, index) => (
                                        <HorizontalListItem key={index}>
                                            {icon && <FontAwesomeIcon icon={['fab', icon]} />} {name}
                                        </HorizontalListItem>
                                    ))}
                                </HorizontalList>
                            </div>
                            <button className={styles.extraSkillsButton} onClick={this.toggleExtraSkills}>
                                <FontAwesomeIcon className={classnames({ [styles.extraSkillsButtonIconHide]: showExtraSkills })} icon={'chevron-down'} />
                                <FontAwesomeIcon className={classnames({ [styles.extraSkillsButtonIconHide]: !showExtraSkills })} icon={'chevron-up'} />
                            </button>
                        </div>
                    </HorizontalListItem>
                </HorizontalList>

                <h2>Languages</h2>
                <HorizontalList>
                    {info.languages.map((lang, index) => (
                        <HorizontalListItem key={index}>
                            <div className={styles.language}>
                                <img className={styles.languageFlag} src={lang.flag} />
                                <div>
                                    <div>
                                        <strong>{lang.name}</strong>
                                    </div>
                                    <div className={styles.languageLevel}>
                                        {lang.level}
                                    </div>
                                </div>
                            </div>
                        </HorizontalListItem>
                    ))}
                </HorizontalList>

                <h2>Social</h2>
                <HorizontalList>
                    {info.pages.map(({ icon, name, url }, index) => (
                        <HorizontalListItem key={index}>
                            <ExternalLink className={styles.socialNetworkLink} to={url}>
                                <FontAwesomeIcon className={styles.socialNetworkLinkIcon} icon={['fab', icon]} />
                                <span>
                                    {name}
                                </span>
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
    }

}

export default InfoScreen;