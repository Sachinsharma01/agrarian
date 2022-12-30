import React from 'react';
import './App.css';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Footer from "./components/footer";
import TopBar from "./components/topBar";
import HomePage from "./components/Home/HomePage";
import Aboutus from "./components/Aboutus/Aboutus";
import Ourteam from "./components/Ourteam/Ourteam";
import Headerteam from "./components/Headerteam/Headerteam";


function App() {
    return (
        <>
            <Header/>
            <div className="" style={{marginTop: '70px'}}>
                <Switch>
                    <Route path='/' exact>
                        <Home/>
                    </Route>
                </Switch>
            </div>
            <HomePage></HomePage>
            {/*<Aboutus></Aboutus>*/}
            {/*<Ourteam></Ourteam>*/}
            {<Headerteam></Headerteam>}
            <Footer/>
            {/*<TopBar/>*/}

        </>
    );
}

export default App;
