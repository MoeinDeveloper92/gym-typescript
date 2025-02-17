import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
import HomePageText from '../assets/HomePageText.png';
import HomePageGraphic from '../assets/HomePageGraphic.png';
import SponserRedBull from '../assets/SponsorRedBull.png';
import SponserForbes from '../assets/SponsorForbes.png';
import SponseFortune from '../assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
        className="flex flex-col md:flex-row mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        {/* Main HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
              },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvtext before:-left-20 before:-z-10">
                <img src={HomePageText} alt="Home Page text" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unrivaled GYM. Unparalled Training Fitness Classes. Something
              Amazing is blinking for you. Take your time. Navigate the Website
              and explore our options. You will enjoy it. and Nailed it. Life is
              too short to waste it.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{ amount: 0.5, once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.5,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
              href={`#${SelectedPage.CONTACTUS}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <img src={HomePageGraphic} alt="Home Graphic" />
        </div>
      </motion.div>
      {/* Sponsers */}
      {isAboveMediumScreen && (
        <div className="bg-primary-100 h-[100px] py-10 flex">
          <div className="mx-auto w-5/6 self-center">
            <div className="flex gap-8 items-center justify-around">
              <img src={SponserRedBull} alt="Red Bull Sponser" />
              <img src={SponserForbes} alt="Red Bull Sponser" />
              <img src={SponseFortune} alt="Red Bull Sponser" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
