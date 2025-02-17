import { useState } from 'react';
import Navbar from './scenes/navbar/Navbar';

//All the type checkings are done during the compile time... which means these type do not exist while the app is built
//These type basically are used during the developent phase, to make sure there is no bigs amnd error and also make sure everythign is type safed.

//Enum is exception and is is available during the build time
import { SelectedPage } from './shared/types';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.HOME
  );
  return (
    <div className="app bg-gray-50">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
