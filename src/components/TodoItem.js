import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#4f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-trough' : 'none'
        }
    }


    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                { title }
                </p>
            </div>
        )
    }
}

// proptypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
    }
    



export default TodoItem