import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faDiscord,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const socialObj = [
  { iconId: faFacebook, iconUrl: 'http://facebook.com' },
  { iconId: faInstagram, iconUrl: 'http://instagram.com' },
  { iconId: faTwitter, iconUrl: 'http://twitter.com' },
  { iconId: faYoutube, iconUrl: 'http://youtube.com' },
  { iconId: faDiscord, iconUrl: 'http://discord.com' },
  { iconId: faGlobe, iconUrl: 'http://localhost:3000' },
  { iconId: faTelegram, iconUrl: 'http://telegram.com' },
];

const Social = () => {
  return (
    <>
      <ul className='social'>
        {socialObj.map((x, indx) => (
          <li key={indx}>
            <a href={x.iconUrl} rel='noreferrer' target='_blank'>
              {<FontAwesomeIcon className='i' icon={x.iconId} />}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Social;
