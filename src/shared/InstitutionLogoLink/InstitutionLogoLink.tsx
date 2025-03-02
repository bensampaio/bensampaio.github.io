import { FC } from 'react';

import ExternalLink from '../ExternalLink';

type Props = {
    logo: string;
    name: string;
    url: string;
};

const InstitutionLogoLink: FC<Props> = ({ logo, name, url }) => (
    <ExternalLink href={url}>
        <img
            alt={name}
            className="hidden sm:block max-h-2xl max-w-6xl"
            src={logo}
        />
    </ExternalLink>
);

export default InstitutionLogoLink;
