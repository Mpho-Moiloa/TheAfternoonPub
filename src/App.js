import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './routes/header';
import TopAfriCap from './routes/topAfriCap';
import Notes  from './routes/notes';
import BeerInfo from './routes/beerInfo';

class App extends React.Component {
    render() {
        return(
            <div>
                   <Router>
                       <Header />
                       <div>
                          <Switch>
                              <Route path='/routes/beerInfo' component={BeerInfo} />
                              <Route path='/routes/topAfriCap' component={TopAfriCap} />
                              <Route path='/routes/notes' component={Notes} />
                          </Switch>
                       </div>
                   </Router>
            </div>
        );
    }
}

export default App;
