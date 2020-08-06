import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
    Card,
    CardHeader, 
    Button,
    Table,
    CardBody,
    Pagination,
    PaginationItem,
    PaginationLink
  } from "reactstrap";
import axios from "axios";

const ListadoRecepcion = () => {

    const [page, setPage] = useState(1);
    const [lotes, setLotes] = useState([]);
    const [pages, setPages] = useState([]);

    const setPagination = (totalPages) => {
        for(let i = 1; i <= totalPages; i++) {
            setPages(pages => [...pages, i]);
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/recepcion/listado_lotes/${page}`).then((response) => {
            setLotes(response.data.data);
            setPagination(response.data.total_paginas);
        });
    }, [page]);

    return (
        <div className="content">
            <Card>
                <CardHeader>
                    <div>
                        <NavLink to="/admin/recepcion/lote">
                            <Button className="btn btn-primary">
                                Registrar Lote
                            </Button>
                        </NavLink>
                    </div>
                </CardHeader>
                <CardBody>
                    <Table striped bordered>
                        <thead>
                            <tr className="thead-main">
                                <th colSpan="7">Recepción/Pesaje</th>
                                <th colSpan="4">Descarte</th>
                                <th colSpan="2"></th>
                            </tr>
                            <tr className="thead-sub">
                                <th>Lote</th>
                                <th>Productor</th>
                                <th>N° Guía</th>
                                <th>F. Cosecha</th>
                                <th>F. Ingreso</th>
                                <th>Jabas</th>
                                <th>Peso Neto</th>
                                <th>Total Jabas</th>
                                <th>Peso Neto</th>
                                <th>% Jabas</th>
                                <th>% Kg</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lotes.map((lote, index) => {
                                return <tr key={index}>
                                    <td>{lote.loteCodigo}</td>
                                    <td>{lote.productor}</td>
                                    <td>{lote.nroGuia}</td>
                                    <td>{lote.fechaCosecha}</td>
                                    <td>{lote.fechaInicio}</td>
                                    <td>{lote.totalJabas}</td>
                                    <td>{lote.pesoNetoLote}</td>
                                    <td>{lote.jabasDescarteA}</td>
                                    <td>{lote.pesoDescarteA}</td>
                                    <td>{lote.jabasDescarteA/lote.totalJabas}</td>
                                    <td>{lote.pesoDescarteA/lote.pesoNetoLote}</td>
                                </tr>;
                            })}
                        </tbody>
                    </Table>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first onClick={() => setPage(page - 1)}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous />
                        </PaginationItem>
                        {
                            pages.map((page, index) => {
                            return <PaginationItem key={index}>
                                <PaginationLink onClick={() => setPage(page)}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                            })
                        }
                        <PaginationItem>
                            <PaginationLink next onClick={() => setPage(page + 1)}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last />
                        </PaginationItem>
                    </Pagination>
                </CardBody>
            </Card>
            
        </div>);
}

export default ListadoRecepcion;