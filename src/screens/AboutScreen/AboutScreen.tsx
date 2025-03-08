import cn from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { FC, memo } from 'react';

import about from '../../../db/about';
import { Anchor } from '../../shared/Anchor';
import ExternalLink from '../../shared/ExternalLink';
import {
  HorizontalList,
  HorizontalListItem,
} from '../../shared/HorizontalList';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';

type TechnologyProps = {
  desc: string;
  id: string;
  logo: StaticImageData;
  url: string;
};

const Technology: FC<TechnologyProps> = ({
  desc,
  id,
  logo,
  url,
}: TechnologyProps) => (
  <HorizontalListItem>
    <ExternalLink
      className={cn(
        'flex',
        'flex-col',
        'items-center',
        'no-underline',
        'text-inherit',
        'visited:text-inherit',
      )}
      href={url}
    >
      <Image alt={id} className="max-w-3xl" src={logo} />
      <span className="mt-2xs">{desc}</span>
    </ExternalLink>
  </HorizontalListItem>
);

const AboutScreen: FC = () => (
  <Screen>
    <h1 className="font-bold text-3xl">About</h1>

    <h2 className="font-bold mt-md text-2xl">Goal</h2>
    <Text className="mt-xs">{about.goal}</Text>

    <h2 className="font-bold mt-md text-2xl">Technologies</h2>
    <Text className="mt-xs">{about.technologies.summary}</Text>

    <h3 className="font-bold mt-sm text-1xl">Frontend</h3>
    <HorizontalList className="items-end mt-xs">
      {about.technologies.client.map((tech, index) => (
        <Technology {...tech} key={index} />
      ))}
    </HorizontalList>

    <h3 className="font-bold mt-sm text-1xl">Tools</h3>
    <HorizontalList className="items-end mt-xs">
      {about.technologies.tools.map((tech, index) => (
        <Technology {...tech} key={index} />
      ))}
    </HorizontalList>

    <h2 className="font-bold mt-md text-2xl">Credits</h2>

    <h3 className="font-bold mt-sm text-1xl">Developers</h3>
    <HorizontalList className="mt-xs">
      {about.credits.developers.map((developer, index) => (
        <HorizontalListItem key={index}>
          <Anchor as={ExternalLink} href={developer.url}>
            {developer.name}
          </Anchor>
        </HorizontalListItem>
      ))}
    </HorizontalList>

    <h3 className="font-bold mt-sm text-1xl">Designers</h3>
    <HorizontalList className="mt-xs">
      {about.credits.designers.map((designer, index) => (
        <HorizontalListItem key={index}>
          <Anchor as={ExternalLink} href={designer.url}>
            {designer.name}
          </Anchor>
        </HorizontalListItem>
      ))}
    </HorizontalList>

    <h3 className="font-bold mt-sm text-1xl">Others</h3>
    <HorizontalList className="mt-xxs">
      {about.credits.others.map((other, index) => (
        <HorizontalListItem key={index}>
          <Anchor as={ExternalLink} href={other.url}>
            {other.name}
          </Anchor>
          {other.desc && (
            <span>
              {' '}
              - {other.desc}{' '}
              {other.item && (
                <Anchor as={ExternalLink} href={other.item.url}>
                  {other.item.name}
                </Anchor>
              )}
            </span>
          )}
        </HorizontalListItem>
      ))}
    </HorizontalList>
  </Screen>
);

export default memo(AboutScreen);
