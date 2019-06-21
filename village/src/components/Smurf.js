import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  width: 25rem;
  height: 25rem;
  margin: 2rem;
  background-color: #88CCFF;
  border: 5px solid #FFF;
  border-radius: 5px;
`

const SmurfDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  `

const Smurf = props => {
  return (
    <SmurfCard>
      <SmurfDetails>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </SmurfDetails>
    </SmurfCard>

  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

