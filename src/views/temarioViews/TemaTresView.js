import React, { Component } from "react";
import { CardBody, CardHeader, Col, Row } from "reactstrap";

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la Y</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <p>
                Se escriben con Y, las palabras que empiecen con yu.
                <br />
                <span className="pRojo">Excepciones</span>: lluvia y sus
                derivados.
                <br />
                <span className="pAmarillo">Ejemplos</span>: yudo, yuca, yugo,
                yugular, yunta.
              </p>
              <p>
                ¿Sabrías ya distinguir a partir de ahora las palabras que se
                escriben con b y no con v?
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    );
  }
}
export default TemaDosView;
