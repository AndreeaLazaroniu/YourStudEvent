import { Login } from './Components/login/login.jsx';
import { Role } from './Components/role/role.jsx';
import { OrganizerRegister } from './Components/register/organizerRegister.jsx';
import Routes_app from './Routes_app.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from "./Components/Home/home";

function App() {
  return (
    <div className="App">
      <Routes_app />
    </div>
  );
}

export default App;
