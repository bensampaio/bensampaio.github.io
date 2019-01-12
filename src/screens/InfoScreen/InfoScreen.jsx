// @flow

import classnames from 'classnames';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import info from '../../../db/info';
import ExternalLink from '../../shared/ExternalLink';
import { HorizontalList, HorizontalListItem } from '../../shared/HorizontalList';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';
import styles from './InfoScreen.scss';

type InfoScreenProps = {};
type InfoScreenState = {
    showExtraSkills: boolean,
};

class InfoScreen extends PureComponent<InfoScreenProps, InfoScreenState> {

    constructor(props: InfoScreenProps) {
        super(props);

        this.state = {
            showExtraSkills: false,
        };

        //$FlowFixMe
        this.toggleExtraSkills = this.toggleExtraSkills.bind(this);
    }

    toggleExtraSkills() {
        this.setState((prevState: InfoScreenState): InfoScreenState => ({
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
                                {icon && <FontAwesomeIcon aria-hidden={true} icon={['fab', icon]} />} {name}
                            </strong>
                        </HorizontalListItem>
                    ))}

                    <HorizontalListItem>
                        <div className={styles.extraSkills}>
                            <div className={classnames(styles.extraSkillsContent, { [styles.extraSkillsContentHide]: !showExtraSkills })}>
                                <HorizontalList>
                                    {info.skills.slice(15).map(({ icon, name }, index) => (
                                        <HorizontalListItem key={index}>
                                            {icon && <FontAwesomeIcon aria-hidden={true} icon={['fab', icon]} />} {name}
                                        </HorizontalListItem>
                                    ))}
                                </HorizontalList>
                            </div>
                            <button className={styles.extraSkillsButton} title={'Expand / Collapse'} onClick={this.toggleExtraSkills}>
                                <FontAwesomeIcon aria-hidden={true} className={classnames({ [styles.extraSkillsButtonIconHide]: showExtraSkills })} icon={'chevron-down'} />
                                <FontAwesomeIcon aria-hidden={true} className={classnames({ [styles.extraSkillsButtonIconHide]: !showExtraSkills })} icon={'chevron-up'} />
                            </button>
                        </div>
                    </HorizontalListItem>
                </HorizontalList>

                <h2>Languages</h2>
                <HorizontalList>
                    {info.languages.map((lang, index) => (
                        <HorizontalListItem key={index}>
                            <div className={styles.language}>
                                <img alt={''} aria-hidden={true} className={styles.languageFlag} src={lang.flag} />
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
                                <FontAwesomeIcon aria-hidden={true} className={styles.socialNetworkLinkIcon} icon={['fab', icon]} />
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