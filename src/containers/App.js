import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      { id:'wqer', name: 'Max', age: 28 },
      { id:'asdf', name: 'Manu', age: 29 },
      { id:'zxcv', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    } // The same = const person = Object.assign({},this.state.persons[personIndex])
    
    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];// the same = const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

	togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons =
          <Persons  
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>    
	 }

    return (

			<div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.state.togglePersonHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
