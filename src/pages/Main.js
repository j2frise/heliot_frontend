import React, { useState, useEffect, useContext, useRef } from 'react';
import { Router, Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { Routes } from "../routes";
import { SessionContext, getSessionCookie, setSessionCookie } from "../context/session";

import { config } from '../config';
import { auth } from '../data/Users'



// pages
import NotFoundPage from "./Error/NotFound";
import Home from "./Home/Home";
import Login from "./Auth/Login";
import Error from "./Auth/Error";
import Dashboard from "./Dashboard/Dashboard";
import Presence from "./Presence/Presence";
import Temperature from "./Temperature/Temperature";
import Rooms from "./Rooms/Rooms";
import Electricity from "./Electricity/Electricity";
import Brightness from "./Brightness/Brightness";




// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Loader from "../components/Loader";
import Offline from "../components/Offline";


const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [session, setSession] = useState(getSessionCookie());  
  const history = useHistory();  
  const location = useLocation();


  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  /*
  useEffect(() => {
    if(session.setIsAuthenticated && (location.pathname == "/" || location.pathname == "")){
      history.push(Routes.Facilities.path);
    }
  }, [session.setIsAuthenticated]); 
  */

  return (
    <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
  );
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [session, setSession] = useState(getSessionCookie());  
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  /*
  useEffect(() => {
    if (!session.setIsAuthenticated) {
      setSessionCookie({
        ...getSessionCookie(),
        pathname : location.pathname
      })
      history.push(Routes.Home.path);
    }
  }, [session.setIsAuthenticated]);
  */

  return (
      <Route {...rest} render={props => (
        <>
          <Loader />
          <Offline />
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            { /*<Footer />*/}
          </main>
        </>
      )}
      />
  );
};

export default () => {
  const history = useHistory();
  const [session, setSession] = useState(getSessionCookie());

  useEffect(
    () => {
      setSession(getSessionCookie());
    },
    [session.setIsAuthenticated]
  );

  return (
    <SessionContext.Provider value={session}>
       <Switch>
        <RouteWithLoader exact path={Routes.Home.path} component={Home} />
        <RouteWithLoader exact path={Routes.Login.path} component={Login} />
        <RouteWithLoader exact path={Routes.Error.path} component={Error} />

        <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
        {/*after auth*/}
        <RouteWithSidebar exact path={Routes.Dashboard.path} component={Dashboard} />
        <RouteWithSidebar exact path={Routes.Presence.path} component={Presence} />
        <RouteWithSidebar exact path={Routes.Temperature.path} component={Temperature} />
        <RouteWithSidebar exact path={Routes.Rooms.path} component={Rooms} />
        <RouteWithSidebar exact path={Routes.Electricity.path} component={Electricity} />
        <RouteWithSidebar exact path={Routes.Brightness.path} component={Brightness} />

        {/*<Redirect to={Routes.NotFound.path} />*/}
      </Switch>
    </SessionContext.Provider>
  );
} 
