import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from './Components/login/login.jsx';
import {Role} from './Components/role/role.jsx';
import {OrganizerRegister} from './Components/register/organizerRegister.jsx';
import {StudentRegister} from './Components/register/studentRegister.jsx';
import {MyProfile} from './Components/myProfile/myProfile.jsx';
import {Layout} from './Components/Header&Footer/Layout.jsx';
import {Home} from "./Components/Home/home";
import {CreateEvent} from "./Components/Event/CreateEvent";
import {AboutPage} from "./Components/About/AboutPage";
import {EventsPage} from "./Components/Events/EventsPage";
import {ResetPassword} from "./Components/Password/ResetPassword"

export const Routes_app = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/role" element={<Role />} />
                    <Route path="/register/organizerRegister" element={<OrganizerRegister />} />
                    <Route path="/register/studentRegister" element={<StudentRegister />} />
                    <Route path="/myProfile" element={<MyProfile />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/createEvent" element={<CreateEvent />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/forgotpassword" element={<ResetPassword />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default Routes_app;