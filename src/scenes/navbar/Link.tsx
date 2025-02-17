import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../shared/types';

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  // what as does? it forcess typesscrit that treat a variable as speciofioc type
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, '') as SelectedPage;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : 'text-black'} transition duration-500 hover:text-primary-500`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
