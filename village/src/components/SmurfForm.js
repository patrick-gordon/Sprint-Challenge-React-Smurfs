import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledSmurfForm = styled.div`
  background-color: red;
  height: 5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 25rem;
`

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    let addSmurf = { name: name, age: age, height: height };


    axios
      .post('http://localhost:3333/smurfs', addSmurf)
      .then(res => { this.setState({ smurfs: res.data }) })
      .catch(err => { console.log('Error adding smurf!', err) })


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledSmurfForm>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </StyledSmurfForm>

    );
  }
}

export default SmurfForm;
