import React from 'react';
import './App.css';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home";

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
        </>
    );
}

export default App;
