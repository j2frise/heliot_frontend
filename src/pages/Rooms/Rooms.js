
import React from "react";
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';

import { RoomsBlock } from "../../components/Widgets";
import classRoomImage from "../../assets/img/classroom.png";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center mt-3">
          <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
        <Col xs={12} sm={6} md={4} xl={4} className="mb-4">
            <RoomsBlock
              classTitle="A011"
              building="bâtiment A"
              floor="étage 1"
              image={classRoomImage}
            />
        </Col>
      </Row>
    </>
  );
};
