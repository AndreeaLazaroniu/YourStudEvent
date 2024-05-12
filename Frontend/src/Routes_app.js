import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthContext} from "./AuthContext";
import React, {useContext} from "react";
import {Login} from './Components/login/login.jsx';
import {Role} from './Components/role/role.jsx';
import {OrganizerRegister} from './Components/register/organizerRegister.jsx';
import {StudentRegister} from './Components/register/studentRegister.jsx';
import {MyProfile} from './Components/myProfile/myProfile.jsx';
import {MyProfileStud} from './Components/myProfile/myProfileStud.jsx';
import {Layout} from './Components/Header&Footer/Layout.jsx';
import {Home} from "./Components/Home/home";
import {CreateEvent} from "./Components/Event/CreateEvent";
import {AboutPage} from "./Components/About/AboutPage";
import {EventsPage} from "./Components/Events/EventsPage";
import {EventDetailPage} from "./Components/Events/EventDetailPage";
import {ResetPassword} from "./Components/Password/ResetPassword"

export const Routes_app = () => {
    const {isLoggedIn} = useContext(AuthContext);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    {isLoggedIn ? (
                        <>
                            <Route path="/myProfileStud" element={<MyProfileStud />} />
                            <Route path="/myProfile" element={<MyProfile />} />
                            <Route path="/createEvent" element={<CreateEvent />} />
                            <Route path="/events" element={<EventsPage />} />
                            <Route path="/event/:Id" element={<EventDetailPage />} />
                        </>
                    ) : (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/role" element={<Role />} />
                            <Route path="/register/organizerRegister" element={<OrganizerRegister />} />
                            <Route path="/register/studentRegister" element={<StudentRegister />} />
                            <Route path="/forgotpassword" element={<ResetPassword />} />
                        </>
                    )}
                </Routes>
            </Layout>
        </Router>
    );
}

export default Routes_app;