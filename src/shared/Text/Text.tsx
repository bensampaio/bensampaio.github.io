import { FC, ReactNode } from 'react';

import { Anchor } from '../Anchor';
import { ExternalLink } from '../ExternalLink';

/**
 * Regular expression used to identify markdown for a link.
 * @type {RegExp}
 */
const anchorRegExp =
  /\[(.+)\]\((https?:\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&//=]*)\)/gi;

/**
 * Regular expression used to identify markdown for a list item.
 * @type {RegExp}
 */
const listItemRegExp = /^\*\s/;

/**
 * Looks for markdown for links in the given line of text and replaces them with an external link.
 * @param {string} line
 * @returns {Array}
 */
const parseLinks = (line: string): ReactNode[] => {
  const accumulator = [];
  const parts = line.split(anchorRegExp);

  for (let i = 0; i < parts.length; i += 3) {
    const text = parts[i];
    const name = parts[i + 1];
    const url = parts[i + 2];

    if (text) {
      accumulator.push(text);
    }

    if (name && url) {
      accumulator.push(
        <Anchor as={ExternalLink} key={i} href={url}>
          {name}
        </Anchor>,
      );
    }
  }

  return accumulator;
};

type Props = {
  children: string;
  className?: string;
};

/**
 * Converts markdown into a component tree (supports: links, lists and paragraphs).
 * @param {Object} props
 * @returns {Array}
 */
export const Text: FC<Props> = ({ children, className }) => {
  const lines = children.split(/\n/g);

  let currentList: null | ReactNode[] = null;

  return (
    <>
      {lines.reduce<ReactNode[]>((accumulator, line, index) => {
        // Start by removing whitespace from both ends of the line so that its length can be properly determined
        line = line.trim();

        // If the line is empty then ignore it since empty paragraphs would only add unnecessary empty space
        if (line.length === 0) {
          return accumulator;
        }

        // Check if the line corresponds to a list item so that a list item can be rendered later
        const isListItem = listItemRegExp.test(line);

        // Remove the list item identifier since it should not be part of the final output
        if (isListItem) {
          line = line.replace(listItemRegExp, '');
        }

        // Parse the anchors in the line
        const parsedLine = parseLinks(line);

        if (isListItem) {
          if (!currentList) {
            currentList = [];
          }

          currentList.push(
            <li className="list-disc ml-md mt-xs" key={currentList.length}>
              {parsedLine}
            </li>,
          );

          if (
            index + 1 === lines.length ||
            !listItemRegExp.test(lines[index + 1])
          ) {
            accumulator.push(<ul key={index}>{currentList}</ul>);
            currentList = null;
          }
        } else {
          accumulator.push(
            <p className={className} key={index}>
              {parsedLine}
            </p>,
          );
        }

        return accumulator;
      }, [])}
    </>
  );
};
