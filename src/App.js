import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Pages/Dashboard'
import Pontosturisticos from './Pages/Pontosturisticos'
import Error from './Pages/Error'

import './App.css'

export default function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/pontoturistico" component={Pontosturisticos} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}