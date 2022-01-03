import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Navigation from "./Navigation";

const AppRouter = ({refreshUser, isLoggedIn, userObj}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Switch>
                {isLoggedIn ? (
                <>
                <Route exact path="/">
                    <Home userObj={userObj}></Home>
                </Route>
                <Route exact path="/profile">
                    <Profile refreshUser={refreshUser} userObj={userObj}></Profile>
                </Route>
                <Redirect from="*" to="/"/>
                </> 
                ) : (
                    <>
                <Route exact path="/"> 
                    <Auth></Auth> 
                </Route>
                <Redirect from="*" to="/"/>
                </>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;
