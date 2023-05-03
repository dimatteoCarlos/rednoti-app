import LayoutPage from './LayoutPage';
import { JoinClub } from '../components/articleDetail/JoinClub';

const AboutPage = () => {
  return (
    <>
      <LayoutPage>
        <section id='about'>
          <div className='container'>
            <div className='about-container'>
              <div className='main'>
                <h1 className='l-heading'>about our organization</h1>
                <p>
                  Our mission is "to act in the public interest, serving all
                  audiences through the provision of impartial, high-quality and
                  distinctive output and services which inform, educate and
                  entertain". RedNoticias helps everyone learn about different
                  subjects in ways they will find accessible, engaging,
                  inspiring and challenging. Our Organization provides
                  specialist educational content to help support learning for
                  children and teenagers across the World.
                </p>
                <p>
                  Somos un portal web con noticias verificadas, imparcial,
                  comprometido con la información veraz desde el mundo para el
                  mundo. Hola Mundo!. Our mission is to empower you with the
                  insight needed to understand and shape our world. We take you
                  on a journey from curiosity to understanding, adding context
                  and clarity to the events and issues swirling around you, so
                  that you can truly understand the problems we face, potential
                  solutions, and what you can do.
                </p>
                <p>
                  Where other outlets are fixated on keeping up with — and
                  writing for — their peers and rivals, or even simply people in
                  power, we’re focused on someone more important: the reader,
                  the listener, the viewer. We never lose sight of the fact that
                  policy and major events, like the climate crisis, wars, or
                  cultural happenings, impact real people’s lives and shape
                  their opinions.
                </p>
              </div>

              <JoinClub />
            </div>
          </div>
        </section>
      </LayoutPage>
    </>
  );
};

export default AboutPage;
