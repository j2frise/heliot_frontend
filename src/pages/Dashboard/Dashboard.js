
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faDoorOpen, faLightbulb, faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Card, Tab, ListGroup, Image, Alert } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

import Profil from "../../assets/img/profil.png";
import Graph from "../../assets/img/graph.svg";
import Actus from "../../assets/img/Actus.png";
import Actus2 from "../../assets/img/Actus2.png";
import { CounterWidget } from "../../components/Widgets";
import { CounterWidgetWhite } from "../../components/Widgets";
import { CounterWidget2 } from "../../components/Widgets";
import { trafficShares } from "../../data/charts";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center mt-4">
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <CounterWidget
            title="Nombre de personne"
            stat="253"
            icon={faUserCircle}
          />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <CounterWidget
            title="Température"
            stat="20°C"
            icon={faThermometerHalf}
          />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <CounterWidget
            title="Salle(s) Disponible(s)"
            stat="15"
            icon={faDoorOpen}
          />
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <CounterWidget
            title="Appareils utilisés"
            stat="1598"
            icon={faLightbulb}
          />
          </Card>
        </Col>

      </Row>

      <Row className="justify-content-md-center mt-4">
      <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card.Title>Consommation électrique</Card.Title>
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Card.Text>
              Cette année:
            </Card.Text>
            <Card.Text style={{fontWeight: '700'}}>
              243 000 kwh
            </Card.Text>
            <img src={Graph} />
           
            
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Card.Title>Liste Salle :</Card.Title>
            <Row>
              <ListGroup>
              
              <Row>
                <Col><ListGroup.Item>A111</ListGroup.Item></Col>
                <Col><ListGroup.Item><Button variant="danger" size='sm'>Occupé</Button></ListGroup.Item></Col>
              </Row>
              
              
              <Row>
                <Col><ListGroup.Item>B200</ListGroup.Item></Col>
                <Col><ListGroup.Item><Button variant="warning" size='sm'>Réservé</Button></ListGroup.Item></Col>
              </Row>
              

              
              <Row>
                <Col><ListGroup.Item>A54</ListGroup.Item></Col>
                <Col><ListGroup.Item><Button variant="success" size='sm'>Disponible</Button></ListGroup.Item></Col>
              </Row>
              

              
              <Row>
                <Col><ListGroup.Item>C01</ListGroup.Item></Col>
                <Col><ListGroup.Item><Button variant="success" size='sm'>Disponible</Button></ListGroup.Item></Col>
              </Row>
              
              </ListGroup>
          </Row>
              
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body style={{ backgroundImage: `linear-gradient(to left, rgba(71,48,40,.9), rgba(84,185,242,1))`}}>
            <Card.Title style={{ color: 'white' }}>Météo :</Card.Title>
            <CounterWidgetWhite
            titleWhite="Risque de pluie."
            statWhite="16ºC"
            icon={faCloud}
            />
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-4">
      <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Row>
              <ListGroup>
              
              <Row>
                <Col><ListGroup.Item>Aujourd'hui:</ListGroup.Item><ListGroup.Item style={{color: '#e22929', fontWeight: '600'}}>52.78 kwh</ListGroup.Item></Col>
                <Col><ListGroup.Item>Ce mois:</ListGroup.Item><ListGroup.Item style={{fontWeight: '700'}}>980.50 kwh</ListGroup.Item></Col>
              </Row>
              
              </ListGroup>
          </Row>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body style={{backgroundColor: "#fedcdc"}}>
            <Row >
              <ListGroup>
              
                <Row>
                    <p style={{fontSize: "13px", color: "#e22929", fontWeight: "600"}}>La consommation d'énergie a dépassé la limite maximale quotidienne, éteignez certains appareils inutilisés.</p>
                </Row>
              
              </ListGroup>
          </Row>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2"}} >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>HÉTIC Actus :</Card.Title>
            <Row>
              <ListGroup>
              
              <Row>
               <Col sm={5}><ListGroup.Item><img src={Actus} /></ListGroup.Item></Col>
               <Col sm={7}><a><ListGroup.Item>Battle d'agario</ListGroup.Item><ListGroup.Item>Nov. 13 2020</ListGroup.Item></a></Col>
              </Row>
              

              
              <Row>
                <Col sm={5}><ListGroup.Item><img src={Actus2} /></ListGroup.Item></Col>
                <Col sm={7}><a><ListGroup.Item>Projet Web</ListGroup.Item><ListGroup.Item>Jui. 19 2021</ListGroup.Item></a></Col>
              </Row>
              
              </ListGroup>
          </Row>
              
            <Card.Text>
              
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body style={{textAlign: 'center'}}>
            <Card.Title style={{textAlign: 'left'}}>Profil</Card.Title>
            <img src={Profil} />
            <Card.Text style={{color: '#FF7171'}}>
              Personnaliser
            </Card.Text>
            <a>
              Modifier
            </a>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </>
  );
};
