
import React from "react";
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';

import { RoomsBlock, DropdownMenu } from "../../components/Widgets";
import classRoomImage from "../../assets/img/classroom.png";

export default () => {
  return (
    <>
        <DropdownMenu
          title="Batiment"
          optionValue1="A"
          optionValue2="B"
          optionValue3="C"
        />
        <DropdownMenu
          title="Etage"
          optionValue1="0"
          optionValue2="1"
          optionValue3="2"
          optionValue4="3"
        />
        <DropdownMenu
          title="Etage"
          optionValue1="0 < 100"
          optionValue2="100 < 200"
          optionValue3="+200"
          optionValue4="Pair"
          optionValue5="Impair"
        />
      <Row className="justify-content-md-center mt-3">
          <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Disponible"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Occupé"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Réservé"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Disponible"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Occupé"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Réservé"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Disponible"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Occupé"
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
              status="Réservé"
            />
        </Col>
      </Row>
    </>
  );
};
