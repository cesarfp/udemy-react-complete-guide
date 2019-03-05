import React, {Component} from 'react';
// import Aux from '../../../hoc/Auxiliary'
// import classes from './Person.css';

class Person extends Component {
    render( ){
        console.log('[Person.js] rendering...');
        return(
            <React.Fragment>
                <p onClick={this.props.click}>
                    I'm a {this.props.name} and I'm {this.props.age} years old
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}
                />
            </React.Fragment>
        );
            
        
        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old</p>
        //         <p>{this.props.children}</p>
        //         <input 
        //             type="text" 
        //             onChange={this.props.changed} 
        //             value={this.props.name}
        //         />
        //     </div>
        // )
    }
}


export default Person;
