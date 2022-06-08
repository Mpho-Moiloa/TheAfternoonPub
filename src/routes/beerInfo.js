import React from 'react';
import Line from './components/line';
import Bar from './components/bar';
import Doughnut from './components/doughnut';

const style = {
    textAlign: 'center',
    marginBottom: 50,
}

class BeerInfo extends React.Component {
  
    render() {
        return (
         <div className='container' style={style}>
             <h1>Information on beer brands based in Europe</h1>
             <h2>Line Graph of European Brewing Scale</h2>
             <Line />
             <h2>pH levels of the Beer</h2>
             <Bar />
             <h2>Attuention levels of the beer.</h2>
            <Doughnut />
         </div>
        );
    }
}
export default BeerInfo;
