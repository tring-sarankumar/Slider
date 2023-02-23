import ImageSlider from './components/slidebar/ImageSlider';
import Reactpage from './pages/ReactPage/Reactpage';
import Nodejspage from './pages/NodePage/Nodejspage';
import ExpressJspage from './pages/Express/ExpressJsPage'
import ReduxPage from './pages/ReduxPage/ReduxPage';
import Tailwindpage from './pages/TailwindPage/TailwindPage';
import PostgresSqlPage from './pages/PostgresSqlPage/PostgresSqlPage';
import NextJsPage from './pages/NextJsPage/NextJsPage';
import TypeScriptPage from './pages/TypeScriptPage/TypeScriptPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
          <Routes>
              <Route path="/"  element={<ImageSlider />}  />
              <Route path="/React"  element={<Reactpage />}  />
              <Route path="/Node"  element={<Nodejspage />}  />
              <Route path="/Express"  element={<ExpressJspage />}  />
              <Route path="/Redux"  element={<ReduxPage />}  />
              <Route path="/TailWind"  element={<Tailwindpage />}  />
              <Route path="/PostgreSql"  element={<PostgresSqlPage />}  />
              <Route path="/NextJs"  element={<NextJsPage />}  />
              <Route path="/TypeScript"  element={<TypeScriptPage />}  />
          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
