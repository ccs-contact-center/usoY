import React, { Component } from "react";
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import actividad1 from "../../assets/img/usoG/actividad3.png";
import API_CCS from "../../services/API_CCS";
import AuthService from "../../services/AuthService";
const API = new API_CCS();

class Actividad3View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );

  constructor(state) {
    super(state);
    this.Aunth = new AuthService();
    this.state = {
      palabra1: "",
      palabra2: "",
      palabra3: "",
      palabra4: "",
      palabra5: "",
      palabra6: "",
      palabra7: "",
      palabra8: "",
      palabra9: "",
      palabra10: "",
      palabra11: "",
      id_ccs: this.Aunth.getProfile().id_ccs,
      form: "usoY-3",
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
      alert("Se guardo actividad: 3, con id: " + respuesta[0].id);
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
              <h2>Evaluación 3: </h2>
            </CardHeader>
            <CardBody className="">
              <Row>
                <Col xs="12">
                  <p>3.-  Completa con Y o LL las palabras siguientes:</p>
                </Col>
                <Col xs="12">
                  <Row className="centrado-fila">
                    <img
                      src={actividad1}
                      style={{ width: 260 }}
                      alt="actividad1 "
                      className="img-fluid animated  bounceInRight delay-1s"
                    />
                    <Col xs="12" sm="9" md="5">
                      <Form>
                        <div
                          className="cajaA2"
                          style={{ backgroundColor: "#d5d4d8" }}
                        >
                          <div className="centrado-fila">
                          Vari
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra1"
                                id="palabra1"
                                maxlength="2"
                                value={this.state.palabra1}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            a
                          </div>

                          <div className="centrado-fila">
                          Fa
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra2"
                                id="palabra2"
                                maxlength="2"
                                value={this.state.palabra2}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            ecer
                          </div>
                          <div className="centrado-fila">
                          Ga
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra3"
                                id="palabra3"
                                maxlength="2"
                                value={this.state.palabra3}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            ego
                          </div>
                          <div className="centrado-fila">
                          Ca
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra4"
                                id="palabra4"
                                maxlength="2"
                                value={this.state.palabra4}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            ado
                          </div>
                          <div className="centrado-fila">
                          Caba
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra5"
                                id="palabra5"
                                maxlength="2"
                                value={this.state.palabra5}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            ero
                          </div>
                          <div className="centrado-fila">
                          Arro
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra6"
                                id="palabra6"
                                maxlength="2"
                                value={this.state.palabra6}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            o
                          </div>
                          <div className="centrado-fila">
                          Gua
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra7"
                                id="palabra7"
                                maxlength="2"
                                value={this.state.palabra7}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            aba
                          </div>
                          <div className="centrado-fila">
                          A  
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra8"
                                id="palabra8"
                                maxlength="2"
                                value={this.state.palabra8}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            untamiento
                          </div>
                          <div className="centrado-fila">
                          Ga
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra9"
                                id="palabra9"
                                maxlength="2"
                                value={this.state.palabra9}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            ina
                          </div>
                          <div className="centrado-fila">
                          Bote
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra10"
                                id="palabra10"
                                maxlength="2"
                                value={this.state.palabra10}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            a
                          </div>
                          <div className="centrado-fila">
                          Pasti
                            <FormGroup
                              style={{
                                paddingTop: "15px",
                                paddingLeft: "3px",
                                paddingRight: "3px",
                              }}
                            >
                              <Input
                                type="text"
                                name="palabra11"
                                id="palabra11"
                                maxlength="2"
                                value={this.state.palabra11}
                                onChange={this.onChange.bind(this)}
                                style={{
                                  width: "20px",
                                  paddingRight: "0px",
                                  paddingLeft: "0px",
                                  textAlign: "center",
                                }}
                              />
                            </FormGroup>
                            a
                          </div>
                        </div>
                        <div className="centrado-fila mt-3">
                          <Button
                            color="primary"
                            onClick={this.onSave.bind(this)}
                          >
                            Enviar
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
              {/* <p>{JSON.stringify(this.state)}</p> */}
            </CardBody>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Actividad3View;
