import { useState } from 'react';
import Navbar from './scenes/navbar/Navbar';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits';
//All the type checkings are done during the compile time... which means these type do not exist while the app is built
//These type basically are used during the developent phase, to make sure there is no bigs amnd error and also make sure everythign is type safed.

//Enum is exception and is is available during the build time
import { SelectedPage } from './shared/types';
import { useCheckScroll } from './hooks/useCheckScroll';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );
  const { isTopOfThePage } = useCheckScroll({ setSelectedPage });
  return (
    <div className="app bg-gray-50">
      <Navbar
        isTopOfThePage={isTopOfThePage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits />
    </div>
  );
};

export default App;
