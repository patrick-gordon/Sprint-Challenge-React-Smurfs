import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import styled from 'styled-components';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

//styled components
const MainNav = styled.div`
  background-color: #88CCFF;
  height: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #FFF;
`

const NavItem = styled.h1`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25rem;
  margin: 1rem;
  text-decoration: none;
  color: #FFF;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {this.setState({ smurfs: res.data })})
      .catch(err => {console.log('Error getting smurfs!', err)});
  };

  postSmurfToServer = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        console.log("Post Response:", response);
        this.setState({ smurfs: response.data });
      })
      .catch(error => alert("Post had an error"));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs)
    return (
      <div className="App">
       <MainNav>
          <NavLink to='/'><NavItem>Smurf List</NavItem></NavLink>
          <NavLink to='/smurf-form'><NavItem>Add Smurf</NavItem></NavLink>
        </MainNav>

        <Route exact path='/' render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path='/smurf-form' component={SmurfForm}  render={props => (
            <SmurfForm postSmurfToServer={this.postSmurfToServer} />
          )} />
      </div>
    );
  }
}

export default App;
