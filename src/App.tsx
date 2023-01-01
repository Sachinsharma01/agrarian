import React from 'react';
import './App.css';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import AboutUs from "./pages/about";
import Team from "./pages/team";
import TeamMemberProfileInfo from "./pages/team/TeamMemberProfileInfo";
import Contact from "./pages/contact";


function App() {
    return (
        <>
            <Header/>
            <div className="" style={{marginTop: '70px'}}>
                <Switch>
                    <Route path='/' exact>
                        <Home/>
                    </Route>
                    <Route path='/about' exact>
                        <AboutUs/>
                    </Route>
                    <Route path='/team' exact>
                        <Team />
                    </Route>
                    <Route path='/team/profile/:name' exact>
                        <TeamMemberProfileInfo />
                    </Route>
                    <Route path='/contact' exact>
                        <Contact />
                    </Route>
                </Switch>
            </div>
            <Footer/>
            {/*<TopBar/>*/}
        </>
    );
}

export default App;
