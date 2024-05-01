import {AuthProvider} from "./AuthContext";
import Routes_app from './Routes_app.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
      <AuthProvider>
        <div className="App">
          <Routes_app />
        </div>
      </AuthProvider>
  );
}

export default App;
