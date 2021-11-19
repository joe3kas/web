import React from 'react'
import { Route, Switch } from 'react-router'
import Mision from './Mision'
import Vision from './Vision'
import Objetivos from './Objetivos'

export default function Tabs() {
    return (
        <div>
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
                    >Misión</a
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
                    >Visión</a
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
                    >Objetivos</a
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
                        <Route exact to="/Mision" component={Mision}></Route>
                    </Switch>
                </div>
                <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    <Switch>
                        <Route exact to="/Vision" component={Vision}></Route>
                    </Switch>
                </div>
                <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                    <Switch>
                        <Route exact to="/Objetivos" component={Objetivos}></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
