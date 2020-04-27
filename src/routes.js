import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

/**importando a primeira página que é o logon*/
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/**as nossas rotas também serã um componente*/
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/**o Switch garante que apenas uma rota seja executada por momento*/}
                <Route path="/" exact component={Logon}/>{/**o path é o caminho/endereço da rota e usei
                 * exact para definir que o caminho tem que ser exatamente esse para abrir a página login.*/}
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>

            </Switch>
        </BrowserRouter>
    );
};
