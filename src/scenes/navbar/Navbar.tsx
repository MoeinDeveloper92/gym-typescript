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
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

  return (
    // Semantic
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
              onClick={() => setIsMenuToggled((pre) => !pre)}
            >
              <Bars3Icon className="text-white w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
