import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavbarLogin } from './components/Navbars/nav_Login';
import { NavbarSignin } from './components/Navbars/nav_Signin';
import { NeutralPage } from './components/Pages/NeutralPage';
import { RoutesPage } from './components/Pages/routesPages/routes';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
      <header className="App-header">
      {isAuthenticated 
        ? 
          <NavbarLogin />
        :
          <NavbarSignin />
        }
      </header>
      <main>
        {isAuthenticated
        ?
          <RoutesPage />
        :
          <NeutralPage />
        }
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;