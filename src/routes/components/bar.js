import React from 'react';
import {Bar} from 'react-chartjs-2';

const getState = (barData) => ({
    labels: [
        barData[0].name,
        barData[5].name,
        barData[12].name,
        barData[15].name,
        barData[19].name,
        barData[20].name
    ],

    datasets: [{
        label: 'pH levels',
        data: [
            barData[0].ph,
            barData[5].ph,
            barData[12].ph,
            barData[15].ph,
            barData[19].ph,
            barData[20].ph
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


class BarGraph extends React.Component {
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
             <Bar data={this.state} />
         </div>
        );
    }
}
export default BarGraph;