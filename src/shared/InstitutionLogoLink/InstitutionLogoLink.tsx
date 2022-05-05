import { FC } from 'react';

import ExternalLink from '../ExternalLink';
import styles from './InstitutionLogoLink.module.scss';

type Props = {
    logo: string,
    name: string,
    url: string,
};

const InstitutionLogoLink: FC<Props> = ({ logo, name, url }) => (
    <ExternalLink to={url}>
        <img alt={name} className={styles.image} src={logo} />
    </ExternalLink>
);

export default InstitutionLogoLink;
