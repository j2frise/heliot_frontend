
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faDoorOpen, faLightbulb, faThermometerHalf, faCloud } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Card, Tab, ListGroup, Image, Alert, Table } from '@themesberg/react-bootstrap';
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

export default () => {
  return (
    <>
      <h1>Page Présence</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Heure d'arrivée</th>
            <th>Heure de départ</th>
            <th>Statut vaccinal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ramtin.attar@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Vacciné</td>
          </tr>
          <tr>
            <td>andrija.pejic</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Vacciné</td>
          </tr>
          <tr>
            <td>alex.painnot@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Non-vacciné</td>
          </tr>
          <tr>
            <td>jane.doe@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Vacciné</td>
          </tr>
          <tr>
            <td>oceane.zhou@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Non-vacciné</td>
          </tr>
          <tr>
            <td>jarce.boukoro@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Non-vacciné</td>
          </tr>
          <tr>
            <td>quentin.huber@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Vacciné</td>
          </tr>
          <tr>
            <td>john.doe@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Non-vacciné</td>
          </tr>
          <tr>
            <td>oliwia.chene@hetic.net</td>
            <td>9h00</td>
            <td>12h30</td>
            <td>Vacciné</td>
          </tr>
        </tbody>
      </Table>


    </>
  );
};
