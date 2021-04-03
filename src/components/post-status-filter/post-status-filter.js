import React, {Component} from 'react';
//import './post-status-filter.css'

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'string', label: 'по строке'},
            {name: 'length', label: 'по длине'},
           
        ]

    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clacc = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                    key={name}
                    type='button'
                    className={`btn ${clacc}`}
                    onClick={() => onFilterSelect(name)}>{label}</button>)
        })

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}