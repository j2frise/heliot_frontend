
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faDoorOpen, faLightbulb, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../../routes";

import { CounterWidget } from "../../components/Widgets";
import { trafficShares } from "../../data/charts";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center mt-4">
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Nombre de personne"
            stat="253"
            icon={faUserCircle}
          />
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Nombre de personne"
            stat="20°C"
            icon={faThermometerHalf}
          />
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Nombre de personne"
            stat="15"
            icon={faDoorOpen}
          />
        </Col>
        <Col xs={12} sm={6} md={3} xl={3} className="mb-4">
          <CounterWidget
            title="Nombre de personne"
            stat="1598"
            icon={faLightbulb}
          />
        </Col>

      </Row>
    </>
  );
};
