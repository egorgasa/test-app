import React, {Component, Fragment}from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
       onUpdateSearch = (event) => {
        const textToFilter = event.target.value;
       this.props.onUpdateSearch(textToFilter)
    }
    render(){
        return(
            <Fragment>
                
            <input
            onChange={this.onUpdateSearch}
             className='form-control search-input'
             type='text'
             placeholder='Поиск по записям'
         />
         
         </Fragment>
        )
    }
}
