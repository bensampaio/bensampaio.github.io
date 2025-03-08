import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import { ExternalLink } from '../ExternalLink';

type Props = {
  logo?: StaticImageData;
  name: string;
  url: string;
};

export const InstitutionLogoLink: FC<Props> = ({ logo, name, url }) =>
  logo && (
    <ExternalLink href={url}>
      <Image
        alt={name}
        className="hidden sm:block max-h-2xl max-w-6xl"
        src={logo}
      />
    </ExternalLink>
  );
