import React from "react";
import {
    Card,
    CardHeader,
    Col,
    CardBody,
    FormGroup,
    Label,
    Input,
    CardTitle,
    CardSubtitle,
    InputGroupAddon,
    InputGroupText,
    InputGroup
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import axios from "axios";


const RegistroLote = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://127.0.0.1:8000/lote/nuevo/', { register }).then(
            response => {
                console.log(response);
            }
        );
    }

    return (
        <div className="content">
            <Card>
                <CardHeader>
                    <CardTitle><h5><b>Formulario para el registro de lote</b></h5></CardTitle>
                    <CardSubtitle>Campaña - <b className="text-primary">2020/2021</b></CardSubtitle>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input value="0001" name="lote_codigo" id="lote_codigo" innerRef={register} hidden readOnly/>
                        <Input value="25" name="productor_id" id="productor_id" innerRef={register} hidden readOnly/>
                        <Input value="35" name="jefe_id" id="productor_id" innerRef={register} hidden readOnly/>
                        <Input value="25" name="empresa_id" id="empresa_id" innerRef={register} hidden readOnly/>
                        <Input value="25" name="jornada_id" id="jornada_id" innerRef={register} hidden readOnly/>
                        <Input value="25" name="transportista_id" id="transportista_id" innerRef={register} hidden readOnly/>
                        
                        <div className="form-row">
                            <Col xl="12"><h6><b>Información del Lote</b></h6></Col>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="nroGuia"><b>Nro de Guia</b></Label>
                                <Input type="text" id="nroGuia" name="nro_guia" innerRef={register}/>
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="totalJabas"><b>Total de Jabas</b></Label>
                                <Input type="text" id="total_jabas" name="total_jabas" innerRef={register}/>
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="variedad"><b>Variedad</b></Label>
                                <Input type="select" id="variedad" name="variedad" innerRef={register}>
                                    <option value="">Seleccione una variedad</option>
                                    <option value="1">Kent</option>
                                    <option value="2">Edward</option>
                                    <option value="3">Haden</option>
                                </Input>
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="jefe_cuadrilla"><b>Jefe de cuadrilla</b></Label>
                                <Input type="text" id="jefe_cuadrilla" innerRef={register} />
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="transportista"><b>Transportista</b></Label>
                                <Input type="text" id="transportista" innerRef={register}/>
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="nombre_empresa"><b>Nombre de la Empresa</b></Label>
                                <Input type="text" id="nombre_empresa" innerRef={register} />
                            </FormGroup>
                        </div>
                        <div className="form-row">
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="fecha_cosecha"><b>Fecha de cosecha</b></Label>
                                <InputGroup>
                                    <Input type="text" id="fecha_cosecha" name="fecha_cosecha" innerRef={register} />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-calendar-alt"></i></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="fecha_ingreso"><b>Fecha de ingreso</b></Label>
                                <InputGroup>
                                    <Input type="text" id="fecha_ingreso" name="fecha_ingreso" innerRef={register} />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText><i className="fa fa-calendar-alt"></i></InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                
                            </FormGroup>
                            

                        </div>
                        <div className="form-row">
                            <Col xl="12"><h6><b>Información del Productor</b></h6></Col>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                <Label for="codigo_productor"><b>Codigo del productor</b></Label>
                                <Input type="text" id="codigo_productor" name="codigo_productor" innerRef={register} />
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                <Label for="mac_codigo"><b>MAC-</b><small>Codigo</small></Label>
                                <Input type="text" id="mac_codigo" name="mac_codigo" innerRef={register} />
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-3">
                                <Label for="mac_nombres"><b>MAC-</b><small>Nombres y Apellidos</small></Label>
                                <Input type="text" id="mac_nombre" name="mac_nombres" innerRef={register} />
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-3" check>
                                <Label className="mt-2"><small>Seleccione si el productor tiene certificación</small></Label>
                                <br></br>
                                <Label check>
                                    <Input type="checkbox" name="globalgap" innerRef={register}/>{' '}
                                GLOBAL GAP
                                <span className="form-check-sign">
                                        <span className="check"></span>
                                    </span>
                                </Label>
                            </FormGroup>
                        </div>
                        <input className="btn btn-success" type="submit"/>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegistroLote;