import cn from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import info from '../../../db/info';
import { ExpandCollapse } from '../../shared/ExpandCollapse';
import ExternalLink from '../../shared/ExternalLink';
import {
  HorizontalList,
  HorizontalListItem,
} from '../../shared/HorizontalList';
import { Icon } from '../../shared/Icon';
import Screen from '../../shared/Screen';
import Text from '../../shared/Text';

const InfoScreen: FC = () => {
  return (
    <Screen>
      <h2 className="font-bold text-2xl">Summary</h2>
      <Text className="mt-sm">{info.summary}</Text>

      <h2 className="font-bold mt-md text-2xl">Skills</h2>
      <HorizontalList className="mt-sm">
        {info.skills.slice(0, 15).map(({ icon, name }, index) => (
          <HorizontalListItem key={index}>
            <strong>
              {icon && <Icon aria-hidden={true} icon={icon} />} {name}
            </strong>
          </HorizontalListItem>
        ))}

        <HorizontalListItem>
          <div className="bg-gray-e border border-solid border-gray-d text-gray-4">
            <ExpandCollapse>
              <HorizontalList>
                {info.skills.slice(15).map(({ icon, name }, index) => (
                  <HorizontalListItem key={index}>
                    {icon && <Icon aria-hidden={true} icon={icon} />} {name}
                  </HorizontalListItem>
                ))}
              </HorizontalList>
            </ExpandCollapse>
          </div>
        </HorizontalListItem>
      </HorizontalList>

      <h2 className="font-bold mt-md text-2xl">Languages</h2>
      <HorizontalList className="mt-sm">
        {info.languages.map((lang, index) => (
          <HorizontalListItem key={index}>
            <div className="flex items-center gap-x-xs">
              <Image alt="" aria-hidden={true} src={lang.flag} />
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

      <h2 className="font-bold mt-md text-2xl">Social</h2>
      <HorizontalList className="mt-sm">
        {info.socials.map(({ icon, name, url }, index) => (
          <HorizontalListItem key={index}>
            <ExternalLink
              className={cn(
                'flex',
                'items-center',
                'gap-x-xs',
                'no-underline',
                'text-inherit',
                'visited:text-inherit',
              )}
              href={url}
            >
              <Icon aria-hidden={true} className={icon.color} icon={icon.src} />
              <span>{name}</span>
            </ExternalLink>
          </HorizontalListItem>
        ))}
      </HorizontalList>

      <h2 className="font-bold mt-md text-2xl">Interests</h2>
      <HorizontalList className="mt-sm">
        {info.interests.map((interest, index) => (
          <HorizontalListItem key={index}>{interest}</HorizontalListItem>
        ))}
      </HorizontalList>
    </Screen>
  );
};

export default memo(InfoScreen);
