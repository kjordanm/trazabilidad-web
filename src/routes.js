/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import RecepcionListado from "views/Recepcion/ListadoRecepcion";
import RegistroLote from "views/Recepcion/RegistroLote";
import ReporteProduccion from "views/Graficos/ReporteProduccion";

var routes = [
  {
    path: "/lista",
    name: "Recepcion",
    icon: "nc-icon nc-bag-16",
    component: RecepcionListado,
    layout: "/admin/recepcion",
    showOnSidebar: true
  },
  {
    path: "/lote",
    name: "Registro de Lote",
    icon: "nc-icon nc-bank",
    component: RegistroLote,
    layout: "/admin/recepcion",
    showOnSidebar: false
  },
  {
    path: "/produccion",
    name: "Reporte de Producción",
    icon: "nc-icon nc-chart-bar-32",
    component: ReporteProduccion,
    layout: "/admin/grafico",
    showOnSidebar: true
  },
];

export default routes;
