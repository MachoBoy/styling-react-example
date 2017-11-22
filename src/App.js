import React, { Component } from 'react';
import Button from './components/Button';
import StyledButton from './components/styledButton';

class App extends Component {
  render() {
    return (
      <div>
        <Button>Accept</Button>
        <StyledButton big>Submit</StyledButton>
      </div>
    );
  }
}

export default App;
