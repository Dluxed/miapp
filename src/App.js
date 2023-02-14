//import logo from './logo.svg';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { LoginButton } from './login';
import { LogoutButton } from './logout';
import { Profile } from './Profile';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      
    <h1 className='header'>Dogo Traductor
        <nav>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        </nav>
    </h1>
    
    
    <div className='lenguages-container'>
        <label for="translateFrom">Traducir del:</label>
         <select name="" id="translateFrom">
            <option value="es">Spanish</option>
         </select>

         <label for="translateTo"> al:</label>
         <select name="" id="translateTo">
         </select>
    </div>

   
    <div class="result-container">
        <div class="firstSection">
            <textarea name="" id="inputTranslate" cols="30" rows="10" placeholder="Ingrese texto a traducir"></textarea>
        </div>

        <div class="secondSection">
            <textarea name="" id="outputTranslate" cols="30" rows="10" placeholder="Resultado"></textarea>
        </div>
    </div>

    
    <button id="translate">Traducir</button>
    <script src="./main.js"></script>
    </div>
  );
}

export default App;
