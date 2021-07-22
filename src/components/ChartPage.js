import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from 'mdbreact';
import { Col, Row, Card, Image, Button, ListGroup, ProgressBar } from '@themesberg/react-bootstrap';


export default (props) => {
  const { title } = props;

  const [dataPie] = useState({
      datasets: [
        {
          data: [50, 310],
          backgroundColor: [
            "#F7464A",
            "#E7E7E7"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#E7E7E7"
          ]
        }
      ]
    })
  
  return (
    <>
      <Card border="light" className="shadow-sm ChartPage">
        <Card.Body>
          <MDBContainer>
            <p className="">{title}</p>
            <Pie data={dataPie} options={{ responsive: true }} />
          </MDBContainer>
        </Card.Body>
        </Card>
      </>
    );
};
