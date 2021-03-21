import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Dashboard from '../Pages/Dashhboard';
import Posts from '../Pages/Posts';



//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/posts" exact component={Posts} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;