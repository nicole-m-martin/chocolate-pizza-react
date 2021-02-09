import React from 'react';

export default class IngredientItems extends React.Component {
    render() {
        return(
            <li> 
                <label><input type="checkbox" />{this.props.amount} {this.props.name}</label>
            </li>
        )
        
    }
}