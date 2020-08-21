import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    Col,
    CardBody,
    FormGroup,
    Label,
    Input,
    CardTitle,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Alert,
    Row
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AsyncTypeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';

const RegistroLote = () => {

    const { register, setValue, handleSubmit } = useForm();
    const [ codigoLote, setCodigoLote ] = useState('');
    const [ productores, setProductores ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
        
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/lote/campania/2/`).then((response) => {
            setCodigoLote(parseInt(response.data[0].cantidad) + 1);
        });
        
    },[])
    
    const onSubmit = form => {
        axios.post(`http://127.0.0.1:8000/lote/nuevo/`, form ).then(
            response => {
                console.log(response);
            }
        );
    }

    const handleSearch = (query) => {
        axios.get(`http://localhost:8000/productor/buscar/${query}/`).then(
            (response) => {
                const productores = response.data.map(
                    (item) => ({ 
                            'nombres' : `${item.personaCodigo} - ${item.personaNombre} ${item.personaApellido}`,
                            'codigo' : item.personaCodigo,
                            'id' : item.personaId,
                            'mac' : item.codigoSenasa
                        }));
                setProductores(productores);
            });
    }

    const handleChange = (data) => {
        setValue('mac_codigo', data[0].mac);
        setValue('codigo_productor', data[0].codigo);
        setValue('productor_id', data[0].id);
    }

    return (
        <div className="content">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <Row>
                            <Col sm="12">
                                <Alert color="primary" className="bordered d-flex flex-row align-items-center justify-content-between">
                                    <h5 className="d-flexk m-0 p-0">
                                        <small className="mr-2">Código de Lote:</small>
                                        <b>{codigoLote}</b>
                                    </h5>
                                    <h6 className="d-flex m-0 p-0">Campaña - <b className="text-light">2020/2021</b></h6>
                                </Alert>   
                            </Col>
                        </Row>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input value={codigoLote} name="lote_codigo" id="lote_codigo" innerRef={register} hidden readOnly/>
                        <Input name="productor_id" id="productor_id" innerRef={register} hidden readOnly/>
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
                                <Input type="text" id="jefe_cuadrilla" name="jefe_cuadrilla" innerRef={register} />
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="transportista"><b>Transportista</b></Label>
                                <Input type="text" id="transportista" name="transportista" innerRef={register}/>
                            </FormGroup>
                            <FormGroup className="col-sm-6 col-md-6 col-lg-6 col-xl-4">
                                <Label for="nombre_empresa"><b>Nombre de la Empresa</b></Label>
                                <Input type="text" id="nombre_empresa" name="nombre_empresa" innerRef={register} />
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
                                {/* <Label for="mac_nombre"><b>MAC-</b><small>Nombres y Apellidos</small></Label>
                                <Input type="text" id="mac_nombre" name="mac_nombre" innerRef={register} /> */}
                                <Label for="mac_nombre"><b>MAC-</b><small>Nombres y Apellidos</small></Label>
                                <AsyncTypeahead
                                    id="productor"
                                    isLoading={isLoading}
                                    labelKey="nombres"
                                    minLength={3}
                                    onSearch={handleSearch}
                                    onChange={handleChange}
                                    options={productores}
                                    placeholder="Buscar productor"
                                    renderMenuItemChildren={(option, props) => (
                                        <span>{option.nombres}</span>
                                        // <Fragment>
                                        //     <Input type="text" id="mac_nombre" name="mac_nombre" value={} innerRef={register} />
                                        // </Fragment>
                                    )}
                                />
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
                        <input className="btn btn-success" type="submit" value="Guardar Lote"/>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}

export default RegistroLote;