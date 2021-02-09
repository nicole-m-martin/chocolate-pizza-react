import React from 'react';

export default class IngredientItems extends React.Component {
    render() {
        return(
            <li> 
                {this.props.amount} {this.props.name}
            </li>
        )
        
    }
}