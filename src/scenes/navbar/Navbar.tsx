import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '../../shared/types';
import useMediaQuery from '../../hooks/useMediaQuery';
import ActionButton from '../../shared/ActionButton';

type Props = {
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfThePage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfThePage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  const background = isTopOfThePage ? '' : 'bg-primary-100 drop-shadow';
  return (
    // Semantic
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${background}`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          {/* Left side */}
          <div className={`${flexBetween} gap-3`}>
            <img src={Logo} alt="Logo" />
          </div>
          {/* Right side */}
          {isAboveMediumScreen ? (
            <div className={`${flexBetween} flex-1`}>
              {/* Inner Leftside */}
              <div className={`flex-1 flex gap-8 ml-4 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Home
                </Link>
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Benefits
                </Link>
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Our Classes
                </Link>
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                  Contact
                </Link>
              </div>
              {/* Inner Right side */}
              <div className={`${flexBetween} gap-3`}>
                <p>SignIn</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become A Memver
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2 "
              onClick={() => {
                console.log('CLicked');
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Bars3Icon className="text-white w-6 h-6" />
            </button>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMediumScreen && isMenuToggled && (
        <>
          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-30"
            onClick={() => setIsMenuToggled(false)} // Closes menu when clicking outside
          />

          {/* Sidebar */}
          <div
            className={`fixed bg-primary-100 right-0 bottom-0 z-40 h-full w-[300px] drop-shadow-xl ${
              isMenuToggled ? 'translate-x-0' : 'translate-x-[300px]'
            } transition-all duration-300 ease-in-out`}
          >
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            {/* Menu Icons */}
            <div className={`flex-1 flex flex-col gap-8 ml-[33%] text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                Home
              </Link>
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                Benefits
              </Link>
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                Our Classes
              </Link>
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
