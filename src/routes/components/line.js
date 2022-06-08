import React from 'react';
import {Line} from 'react-chartjs-2';

const getState = (lineData) => ({
    labels: [
        lineData[0].name,
        lineData[5].name,
        lineData[12].name,
        lineData[15].name,
        lineData[19].name,
        lineData[20].name
    ],

    datasets: [{
        label: 'ebc of beer',
        data: [
            lineData[0].ebc,
            lineData[5].ebc,
            lineData[12].ebc,
            lineData[15].ebc,
            lineData[19].ebc,
            lineData[20].ebc
        ],
        backgroundColor: [
            '#A41CDB',
            '#FF8E25',
            '#1FDC3F',
            '#7CEBDF',
            '#E30725',
            '#1D7200'
        ],
        hoverBackgroundColor: [
            '#A41CDB',
            '#FF8E25',
            '#1FDC3F',
            '#7CEBDF',
            '#E30725',
            '#1D7200'
        ]
    }]

});


class LineGraph extends React.Component {
    state = {
        labels: [],
        datasets: []
    }
    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(data => data.json())
        // .then(data => console.log(data))
        .then(data => this.setState(getState(data)));
    }
    render() {
        return (
         <div>
             <Line data={this.state} />
         </div>
        );
    }
}
export default LineGraph;