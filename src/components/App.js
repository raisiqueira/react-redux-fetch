import React, {Component} from 'react';
import AstronomyContainer from './AstronomyContainer';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Hello Nasa</h1>
        <p>are you ok?</p>
        <AstronomyContainer />
      </div>
    )
  }
}

export default App;