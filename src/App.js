import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      trips: []
    }
  }

  getTrips(){
    return [
      {
        id: 1,
        date: '12/13/18',
        distance: '31.32 miles'
      },
      {
        id: 2, 
        date: '12/13/18',
        distance: '31.22 miles'
      }
    ]
  }

  componentDidMount () {
    /*
    this.getTrips().then(trips => {
      this.setState({ trips })
    })
    */
   this.setState({
    trips: this.getTrips()
   })
  }

  render() {

    const totalTrips = this.state.trips.map((trip, i) => (
    <li key={i}>{trip.name}</li>
  ));
    return (
      <div className="App">
        <h1>Commute Tracker</h1>
        {totalTrips}
      </div>
    );
  }
}

export default App;
