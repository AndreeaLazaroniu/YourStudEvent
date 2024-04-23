import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from './Components/login/login.jsx';
import {Role} from './Components/role/role.jsx';
import {OrganizerRegister} from './Components/register/organizerRegister.jsx';
import {StudentRegister} from './Components/register/studentRegister.jsx';
import {MyProfile} from './Components/myProfile/myProfile.jsx';

export const Routes_app = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/role" element={<Role />} />
                <Route path="/register/organizerRegister" element={<OrganizerRegister />} />
                <Route path="/register/studentRegister" element={<StudentRegister />} />
                <Route path="/myProfile" element={<MyProfile />} />
            </Routes>
        </Router>
    );
}

export default Routes_app;