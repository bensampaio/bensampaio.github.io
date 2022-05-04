// @flow

import { memo } from 'react';

import ExternalLink from '../ExternalLink';
import styles from './InstitutionLogoLink.module.scss';

type InstitutionLogoLinkProps = {
    logo: string,
    name: string,
    url: string,
};

const InstitutionLogoLink = ({ logo, name, url }: InstitutionLogoLinkProps) => (
    <ExternalLink to={url}>
        <img alt={name} className={styles.image} src={logo} />
    </ExternalLink>
);

export default memo<InstitutionLogoLinkProps>(InstitutionLogoLink);
