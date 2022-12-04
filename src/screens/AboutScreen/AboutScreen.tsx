import cn from 'classnames';
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
    logo: string;
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
                'visited:text-inherit'
            )}
            href={url}
        >
            <img alt={id} className="max-h-4xl" src={logo} />
            <span className="mt-2xs">{desc}</span>
        </ExternalLink>
    </HorizontalListItem>
);

const AboutScreen: FC = () => (
    <Screen title="About">
        <h1>About</h1>

        <h2>Goal</h2>
        <Text>{about.goal}</Text>

        <h2>Technologies</h2>
        <Text>{about.technologies.summary}</Text>

        <h3>Frontend</h3>
        <HorizontalList>
            {about.technologies.client.map((tech, index) => (
                <Technology {...tech} key={index} />
            ))}
        </HorizontalList>

        <h3>Tools</h3>
        <HorizontalList>
            {about.technologies.tools.map((tech, index) => (
                <Technology {...tech} key={index} />
            ))}
        </HorizontalList>

        <h2>Credits</h2>

        <h3>Developers</h3>
        <HorizontalList>
            {about.credits.developers.map((developer, index) => (
                <HorizontalListItem key={index}>
                    <Anchor as={ExternalLink} href={developer.url}>
                        {developer.name}
                    </Anchor>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h3>Designers</h3>
        <HorizontalList>
            {about.credits.designers.map((designer, index) => (
                <HorizontalListItem key={index}>
                    <Anchor as={ExternalLink} href={designer.url}>
                        {designer.name}
                    </Anchor>
                </HorizontalListItem>
            ))}
        </HorizontalList>

        <h3>Others</h3>
        <HorizontalList>
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
