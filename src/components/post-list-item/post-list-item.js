import React, {Component} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {

    render() {
        const {label} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

   

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                >
                     {label}
                </span>
               
            </div>
        )
    }
}

