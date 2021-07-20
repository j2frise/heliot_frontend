import React from "react";
import { Col } from '@themesberg/react-bootstrap';


export default () => {

  return (
    <section className="d-flex align-items-center justify-content-center my-5 mt-lg-6 mb-lg-5">
      <Col xs={12} md={10} className="alert alert-danger text-center">
        Erreur lors de la connexion
      </Col>
    </section>
  );
};
