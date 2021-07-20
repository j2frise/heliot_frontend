import React, {useEffect, useState} from "react";
import {  useHistory } from "react-router-dom";
import { config,url } from '../../config';
import { Col, Row, Container, Card } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import BgImage from "../../assets/img/building.svg";
import axios from 'axios';
import GoogleButton from "react-google-button";
import { getSessionCookie, setSessionCookie } from "../../context/session";


export default () => {
  const history = useHistory();
  const [error, setError] = useState(false)

  const fetchAuthUser = async () => {
    const response = await axios
      .get(url.backend+"/auth/user")
      .catch((err) => {
        console.log(err);
        console.log("Not properly authenticated");

        setSessionCookie({ 
          ...getSessionCookie(),
          accessToken: null, 
          user: null,
          setIsAuthenticated: false
        });
        setError(true)
      });

    if (response && response.data) {
      console.log("User: ", response.data);
      setSessionCookie({ 
        ...getSessionCookie(),
        accessToken: response.data.token, 
        user: response.data.user,
        setIsAuthenticated: true
      });
      history.push(getSessionCookie().pathname?getSessionCookie().pathname:Routes.Dashboard.path);
    }
  };

  const redirectToGoogleSSO = async () => {
    let timer = null;
    const googleLoginURL = url.backend+"/login/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          //fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">

        <Container>

          <Row className="justify-content-center form-bg-image">
            <Col xs={6} className="d-flex align-items-center justify-content-center">
                <div className="text-center col-xs-12 col-sm-12 col-md-11">
                  <h1 className="text-primary">HELiOT</h1>
                  <h2 className="text-primary">smart building</h2>
                  <p>
                    Nous vous offrons l'IoT comme personne d'autre. 
                    Connectez chaque capteur de l'ensemble de votre bâtiment éducatif à un seul réseau. 
                    Oubliez le déploiement de réseau complexe. 
                    Obtenez le seul réseau de connectivité qui fonctionne réellement tout seul.
                  </p>
                  <button className="btn btn-primary" onClick={redirectToGoogleSSO}>Connexion avec le mail HETIC</button>
                </div>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
              <img src={BgImage} className="img-bg" />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
