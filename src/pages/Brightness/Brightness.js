
import React from "react";
import { faUserCircle, faDoorOpen, faLightbulb, faThermometerHalf, faChair, faTv } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { Banner, CounterWidget, ConnectedObjects, Intensity, ColorPicker } from "../../components/Widgets";
import classRoomImage from "../../assets/img/classroom.png";
import ChartsPage from "../../components/ChartPage";

export default () => {
  return (
    <>
      <h1>Gestion des salles</h1>
      <Banner
        image={classRoomImage}
        roomTitle="SALLE A011"
        bulding="Batiment: A"
        floor="étage: 0"
      />
      <Row className="justify-content-md-center mt-4">
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Nombre de personne"
            stat="23"
            icon={faUserCircle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Température"
            stat="20°C"
            icon={faThermometerHalf}
          />
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Places disponibles"
            stat="5"
            icon={faChair}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-4">
        <Col xs={12} sm={6} md={5} xl={5} className="mb-4">
          <ConnectedObjects
            title="Appareils connectées :"
            icon={faTv}
            objectName="Téléviseur"
            objectModel="LG K230 - S"
          />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
          <div>
            <Intensity
              title="Intensité de la lumière :"
            />
            <ColorPicker
              title="Couleur de la lumière :"
            />
          </div>
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <div>
            <ChartsPage
              title="Chauffage :"
            />
            <ChartsPage
              title="Humidité :"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
