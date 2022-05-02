import React, { Component } from 'react';
import TopSpot from './topspot';
const axios = require("axios");

class App extends Component {
  // initialize state
  constructor(props) {
		super(props);

		this.state = {
			topspots: []
		};
	}
  
  // add lifecycle hook
  componentWillMount() {
    // invoke axios object
    axios
      // http get request to external web service
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      // first callback takes http response and returns data property
      .then(response => response.data)
      // second callback uses this.setState function to merge provided object with current object assigned to this.state
      .then(topspots => this.setState({ topspots }));
	}
  
  render() {
    return (
      // <div className='App' style={{backgroundColor: 'black'}}>
        <div className='container'>
          <div className='row' style={{border: '2px solid', marginTop: '7%', marginBottom: '5%'}}>
            <h1 className='text-center'>San Diego Top Spots</h1>
            <h4 className='text-center'>A list of the top 30 places to see in San Diego, California</h4>
          </div>
          <div className='row'>
            {/* { JSON.stringify(this.state.topspots, null, 2) } */}
            {
              this.state.topspots.map(topspot => (
                  <TopSpot
                      key={topspot.id}
                      name={topspot.name}
                      description={topspot.description}
                      location={topspot.location} 
                  />
              ))
            }
          </div>
        </div>
      // </div>
    );
  }
}

export default App;
