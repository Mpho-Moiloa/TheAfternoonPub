// import React from 'react';
// import {Polar} from 'react-chartjs-2';

// const getState = (polarData) => ({
//     labels: [
//         polarData[0].name,
//         polarData[5].name,
//         polarData[12].name,
//         polarData[15].name,
//         polarData[19].name,
//         polarData[20].name
//     ],

//     datasets: [{
//         data: [
//             polarData[0].attenuation_level,
//             polarData[5].attenuation_level,
//             polarData[12].attenuation_level,
//             polarData[15].attenuation_level,
//             polarData[19].attenuation_level,
//             polarData[20].attenuation_level
//         ],
//         backgroundColor: [
//             '#A41CDB',
//             '#FF8E25',
//             '#1FDC3F',
//             '#7CEBDF',
//             '#E30725',
//             '#1D7200'
//         ],
//         hoverBackgroundColor: [
//             '#A41CDB',
//             '#FF8E25',
//             '#1FDC3F',
//             '#7CEBDF',
//             '#E30725',
//             '#1D7200'
//         ]
//     }]

// });


// // class Polar extends React.Component {
//     state = {
//         labels: [],
//         datasets: []
//     }
//     componentDidMount() {
//         fetch('https://api.punkapi.com/v2/beers')
//         .then(data => data.json())
//         // .then(data => console.log(data))
//         .then(data => this.setState(getState(data)));
//     }
//     render() {
//         return (
//          <div>
//              <Polar data={this.state} />
//          </div>
//         );
//     }
// }
// export default Polar;

