import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import AuthService from "../../services/AuthService";
import actividad2 from "../../assets/img/usoG/actividad2.png";
import API_CCS from "../../services/API_CCS";
const API = new API_CCS();

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  constructor(props) {
    super(props);
    this.Auth = new AuthService();
    this.state = {
      palabra1Acuerto1: "",
      palabra1Acuerto2: "",
      palabra1Acuerto3: "",
      palabra2Acuerto1: "",
      palabra2Acuerto2: "",
      palabra2Acuerto3: "",

      id_ccs: this.Auth.getProfile().id_ccs,
      form: "usoY-2",
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);
      alert("Se guardo actividad: 2, con id: " + respuesta[0].id);
    } catch (err) {
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 2: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="9">
                  <p>
                    2.- Sabrías escribir palabras que inicien con <b>yer</b> y
                    otras palabras acabadas en <b>uir</b>. Pon tres ejemplos de
                    cada una.
                  </p>
                </Col>
                <Col xs="3">
                  <img
                    src={actividad2}
                    style={{ width: 150 }}
                    alt="actividad2 "
                    className="img-fluid animated  bounceInRight delay-1s"
                  />
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: "#d5d4d8" }}>
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra1Acuerto1">
                          <b>yer </b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto1"
                          id="palabra1Acuerto1"
                          value={this.state.palabra1Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto2">
                          <b>yer </b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto2"
                          id="palabra1Acuerto2"
                          value={this.state.palabra1Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto3">
                          <b>yer </b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto3"
                          id="palabra1Acuerto3"
                          value={this.state.palabra1Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: "#d5d4d8" }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra2Acuerto1">
                          <b>uir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto1"
                          id="palabra2Acuerto1"
                          value={this.state.palabra2Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto2">
                          <b>uir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto2"
                          id="palabra2Acuerto2"
                          value={this.state.palabra2Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto3">
                          <b>uir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto3"
                          id="palabra2Acuerto3"
                          value={this.state.palabra2Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>

                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default ActividadView;
