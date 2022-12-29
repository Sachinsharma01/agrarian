import React from 'react';
import './App.css';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import AboutUs from "./pages/about";


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
                </Switch>
            </div>
            <Footer/>
            {/*<TopBar/>*/}
        </>
    );
}

export default App;
