import React from 'react'
import { Route, Switch } from 'react-router'
import Programas from './Programas'
import Proyectos from './Proyectos'
import Psico from './Psico'

export default function Tabs() {
    return (
        <>
        <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
                <a
                    className="nav-link active"
                    id="ex1-tab-1"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                >Psico-Orientación</a
                >
            </li>
            <li className="nav-item" role="presentation">
                <a
                    className="nav-link"
                    id="ex1-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                >Proyectos</a
                >
            </li>
            <li className="nav-item" role="presentation">
                <a
                    className="nav-link"
                    id="ex1-tab-3"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                >Programas</a
                >
            </li>
        </ul>

        <div className="tab-content" id="ex1-content">
            <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
            >
                <Switch>
                    <Route exact to="/Psico" component={Psico}></Route>
                </Switch>
            </div>
            <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                <Switch>
                    <Route exact to="/Proyectos" component={Proyectos}></Route>
                </Switch>
            </div>
            <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                <Switch>
                    <Route exact to="/Programas" component={Programas}></Route>
                </Switch>
            </div>
        </div>
    </>
    )
}
