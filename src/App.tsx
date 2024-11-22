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
import {Toaster} from "react-hot-toast";
import Careers from "./pages/careers";
import ServicesPage from "./pages/services";
import Blog from "./pages/blogs";
import Agriculture from "./pages/blogs/Agriculture";
import BlogPage from "./pages/blogs/BlogPage";
import AgriMotivation from "./pages/blogs/AgriMotivation";
import Privacy from './pages/privacy';
import VermiCompost from './pages/product';


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
                        <Team/>
                    </Route>
                    <Route path='/team/profile/:name' exact>
                        <TeamMemberProfileInfo/>
                    </Route>
                    <Route path='/contact' exact>
                        <Contact/>
                    </Route>
                    <Route path='/careers' exact>
                        <Careers/>
                    </Route>
                    <Route path='/services' exact>
                        <ServicesPage/>
                    </Route>
                    <Route path='/vermicompost' exact>
                        <VermiCompost />
                    </Route>
                    <Route path='/blogs' exact>
                        <Blog />
                    </Route>
                    <Route path='/blogs/agriculture' exact>
                        <Agriculture />
                    </Route>
                    <Route path='/blogs/agrarian' exact>
                        <BlogPage />
                    </Route>
                    <Route path='/blogs/agri_motivation' exact>
                        <AgriMotivation />
                    </Route>
                    
                    <Route path='/privacy' exact>
                        <Privacy/>
                    </Route>
                    <Route path='*' exact>
                        <Home/>
                    </Route>
                    
                </Switch>
            </div>
            <Toaster containerStyle={{
                top: 100
            }
            }/>
            <Footer/>
            {/*<TopBar/>*/}
        </>
    );
}

export default App;
