import React from 'react';

import ExternalLink from '../ExternalLink';
import styles from './InstitutionLogoLink.scss';

const InstitutionLogoLink = ({ logo, name, url }) => (
    <ExternalLink to={url}>
        <img alt={name} className={styles.image} src={logo} />
    </ExternalLink>
);

export default InstitutionLogoLink;