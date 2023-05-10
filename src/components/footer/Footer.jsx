import { BottomFooter } from './BottomFooter';
import { EmailNewLetter } from './EmailNewLetter';
import { FooterClub } from './FooterClub';
import {Presentacion} from './Presentacion';
import {SiteLinks} from './SiteLinks';

const logoUrl = require('./logoLightRNS.png');

const Footer = () => {
  return (
    <>
      <div id='main-footer' className='py-2'>
        <div className='container footer-container'>
          <Presentacion logoUrl={logoUrl} />
          <EmailNewLetter />
          <SiteLinks />
          <FooterClub />
          <BottomFooter />
        </div>
      </div>
    </>
  );
};

export default Footer;
