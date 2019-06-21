import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

// Styled Components

const SmurfListContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

const SmurfList = styled.ul`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

const WelcomeMessage = styled.h1`
  color: #FFF;
  font-size: 3rem;
  background-color: #88CCFF;
  border: 3px solid #FFF;
  padding: 1rem;
  border-radius: 5px;
`

class Smurfs extends Component {
  render() {
    return (
      <SmurfListContainer>
        <WelcomeMessage>Welcome to Smurf Village!</WelcomeMessage>
        <SmurfList>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </SmurfList>
      </SmurfListContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
