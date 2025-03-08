import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { FC, useId } from 'react';

export const Icon: FC<FontAwesomeIconProps> = (props) => {
  const titleId = `fa${useId()}icon`;

  return (
    <FontAwesomeIcon {...props} titleId={props.title ? titleId : undefined} />
  );
};
