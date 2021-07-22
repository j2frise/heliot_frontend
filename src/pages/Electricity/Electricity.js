
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faDoorOpen, faLightbulb, faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Card, Tab, ListGroup, Image, Alert } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

import ChartBody from "../../assets/img/electricity/ChartBody.svg";
import Profil from "../../assets/img/profil.png";
import Graph from "../../assets/img/graph.svg";
import Actus from "../../assets/img/Actus.png";
import Actus2 from "../../assets/img/Actus2.png";
import { CounterWidget } from "../../components/Widgets";
import { CounterWidgetWhite } from "../../components/Widgets";
import { CounterWidget2 } from "../../components/Widgets";
import { trafficShares } from "../../data/charts";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default () => {
  return (
    <>

      <h1 style={{ marginLeft: "20px" }}>Électricité</h1>

      <Row className="justify-content-md-left ml-5 mt-4" style={{ marginLeft: "10px" }}>
      <Col xs={12} sm={6} md={3} xl={5} className="mb-4">
        <Card.Title >Consommation électrique</Card.Title>
        <Card style={{ width: '36rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Card.Text>
              Cette année:
            </Card.Text>
            <Card.Text style={{fontWeight: '700'}}>
              243 000 kwh
            </Card.Text>
            <img style={{width: "700px"}} src={ChartBody} />
           
            
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={3} className="mt-5">
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
        
      </Row>

      <h5 style={{ marginLeft: "20px", marginTop: "10px" }}>Mode de consommation</h5>

      <Row className="justify-content-md-left mt-4" style={{ marginLeft: "10px" }}>
      <Col xs={12} sm={6} md={3} xl={2} className="mb-4">
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Card.Title>Mode Eco+</Card.Title>
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Ajustement de la luminosité.
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Ajuste en fonction de la lumière ambiante.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Une durée de vie optimale
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Permet une meilleure utilisation des objets à consommation électrique.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Des problèmes ??
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Réduit la consommation, mais réduit aussi la puissance rendu.
            </Card.Text>
            <Button style={{backgroundColor: "#0085FF", border: "none", borderRadius: "20px", padding: "7px 30px", width: "100%"}}>Activer</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={2} className="mb-4 ml-4" style={{marginLeft: "45px"}}>
        <Card style={{ width: '18rem', boxShadow: "1px 5px 5px #e2e2e2" }}>
          <Card.Body>
            <Card.Title>Mode Standard</Card.Title>
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Technique du 50%
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Optimise votre ratio sur une valeur moyenne de 50%.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Une durée de vie Longue
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Permet une meilleure utilisation des objets à consommation électrique.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Des problèmes ??
            </Card.Text>
            <Card.Text style={{fontSize: "13px"}}>
            Ni performant, ni en éco+, cela reste un bon choix pour les moldus.
            </Card.Text>
            <Button style={{backgroundColor: "#0085FF", border: "none", borderRadius: "20px", padding: "7px 30px", width: "100%"}}>Activer</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col xs={12} sm={6} md={3} xl={2} className="mb-4 ml-4" style={{marginLeft: "57px", backgroundColor: "#102E4A", borderRadius: "0.5rem", boxShadow: "1px 5px 5px #e2e2e2"}}>
        <Card style={{ width: '18rem', backgroundColor: "#102E4A" }}>
          <Card.Body>
            <Card.Title style={{color: "white"}}>Mode Personnalisable</Card.Title>
            <Card.Text style={{color: "white", fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Plein Pouvoir
            </Card.Text>
            <Card.Text style={{color: "#CBCFD4", fontSize: "13px"}}>
            Ajuste en fonction de la lumière ambiante.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{color: "white", fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Programmation par horaire
            </Card.Text>
            <Card.Text style={{color: "#CBCFD4", fontSize: "13px"}}>
            Permet une meilleure utilisation des objets à consommation électrique.
            </Card.Text>
            <hr
              style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 1,
                  margin: "8px"
              }}
            />
            <Card.Text style={{color: "white", fontSize: "13px", fontWeight: "700", marginBottom: "4px"}}>
            Des problèmes ??
            </Card.Text>
            <Card.Text style={{color: "#CBCFD4", fontSize: "13px"}}>
            Réduit la consommation, mais réduit aussi la puissance rendu.
            </Card.Text>
            <Button style={{backgroundColor: "#999999", border: "none", borderRadius: "20px", padding: "7px 30px", width: "100%"}}>Desactiver</Button>
          </Card.Body>
        </Card>
        </Col>

      </Row>

    </>
  );
};
