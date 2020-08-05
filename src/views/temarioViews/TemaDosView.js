import React, { Component } from "react";
import { CardBody, Col, Row, CardHeader } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la Y</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                Se escribe con Y, la silaba yec.
                <br />
                <span className="pAmarillo">Ejemplos</span>: proyectar,
                inyectar, deyectar, abyecto, inyección, deyección.
              </p>
              <p>
                Se escribirá Y, al inicio del sonido yer.
                <br />
                <span className="pAmarillo">Ejemplos</span>: yerno, yerbal,
                yerbatero, yerba, yermar, yerro.
              </p>
              <p>
                Se escribe Y, después de los sonidos ad, dis, sub.
                <br />
                <span className="pAmarillo">Ejemplos</span>: adyacente,
                disyuntiva, subyacente, subyugar, disyunción.
              </p>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
