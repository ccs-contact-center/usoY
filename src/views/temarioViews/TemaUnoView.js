import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la Y</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: "0px" }}
              >
                <b>Reglas ortográficas de la Y</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <p>
                <b>Se escriben con Y</b>
              </p>
              <p>
                Se escriben con Y, las formas de los verbos terminados en uir.
                <br />
                <span className="pAmarillo">Ejemplos</span>: contribuir -
                contribuyo, distribuir - distribuyen, construir - construyen
              </p>
              <p>
                Las formas verbales que no tengan y, ll, en su infinitivo se
                escribirán con Y. <br />
                <span className="pAmarillo">Ejemplos</span>: oír - oyen, haber -
                hayan, ir - vaya, erguir - yergo.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaUnoView;
