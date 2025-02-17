import { useState, useEffect } from 'react';
import { SelectedPage } from '../shared/types';

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};
export const useCheckScroll = (props: Props) => {
  const [isTopOfThePage, setIsTopOfThePage] = useState<boolean>(false);

  const { setSelectedPage } = props;
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfThePage(true);
        setSelectedPage(SelectedPage.HOME);
      } else {
        setIsTopOfThePage(false);
      }
    };
    checkScroll();

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return { isTopOfThePage };
};
