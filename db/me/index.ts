import { StaticImageData } from 'next/image';

import profilePicture from './me.jpg';

type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  picture: StaticImageData;
};

export const me: Profile = {
  firstName: 'Bruno',
  lastName: 'Sampaio',
  fullName: 'Bruno Sampaio',
  picture: profilePicture,
};
