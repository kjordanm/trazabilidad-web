import React, { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col
  } from "reactstrap";
import { Line, Pie } from "react-chartjs-2";
import {
    dashboardNASDAQChart,
} from "variables/charts.js";
import axios from "axios";


const ReporteProduccion = () => {

    const [dataGraph, setDataGraph] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/grafico/produccion/productores").then((response) => {      
            setDataGraph({'data' : {
                'labels' : response.data.labels, 
                'datasets' : [{
                    'fill': false,
                    'borderColor': "#51CACF",
                    'backgroundColor': "transparent",
                    'pointBorderColor': "#51CACF",
                    'pointRadius': 4,
                    'pointHoverRadius': 4,
                    'pointBorderWidth': 8,
                    'data': response.data.datasets
                    }]
            }});
        });
    }, []);

    return <div className="content">
        <Row>
            <Col>
                <Card className="card-chart">
                    <CardHeader>
                    <CardTitle tag="h5">Ingreso de mango</CardTitle>
                        <p className="card-category">Lotes por productor</p>
                    </CardHeader>
                    <CardBody>
                    <Line
                        data={dataGraph.data}
                        options={dataGraph.options}
                        width={400}
                        height={100}
                    />
                    </CardBody>
                    <CardFooter>
                    <div className="chart-legend">
                        <i className="fa fa-circle text-info" /> Empresa Coast Citrus Tropical Fruit
                        {/* <i className="fa fa-circle text-warning" /> BMW 5 Series */}
                    </div>
                    <hr />
                    {/* <div className="card-stats">
                        <i className="fa fa-check" /> Data information certified
                    </div> */}
                    </CardFooter>
                </Card>
            </Col>
        </Row>;
    </div>;
}

export default ReporteProduccion;