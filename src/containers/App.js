import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import Aux from '../hoc/Auxiliary'
class App extends Component {
	
	constructor(props){
		super(props);
		console.log('[App.js] constructor');
		
	}

	state = {
		persons: [
			{ id:'asfa1', name: 'Max', age: 28 },
			{ id:'vasdf1', name: 'Manu', age: 29 },
			{ id:'asdf11', name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true
	};

	static getDerivedStateFromProps(props, state)
	{
		console.log('[App.js] getDerivedStateFromProps', props);
		return state;
	}

	// componentWillMount(){
	//   console.log('[App.js] componentWillMount')
	// }

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	}

	componentDidUpdate(){
		console.log('[App.js] componentDidUpdate');
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('[App.js] shoudComponentUpdate');
		return true;
	}

	nameChangedHandler = (event, id) => {
		console.log('[nameChangeHandler]');
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
		console.log('[App.js] render');

		let persons = null;

		if(this.state.showPersons){
			persons =
					<Persons  
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						changed={this.nameChangedHandler}/>    
		}

		return (
			
			<Aux>
				<button
					onClick={()=>{this.setState({showCockpit:false})}}>
					Remove Cockpit
				</button>
				{this.state.showCockpit ? <Cockpit
					title={this.props.appTitle} 
					showPersons={this.state.showPersons} 
					personsLength={this.state.persons.length} 
					clicked={this.togglePersonHandler}/> : null} 
				{persons}
			</Aux>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default withClass(App, classes.App);
