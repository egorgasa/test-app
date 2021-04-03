import React from 'react';
import PostListItem from '../post-list-item'
import './post-list.css'



const PostList = ({allWords}) => {

    const elements = allWords.map((item) => {
    const id = allWords.indexOf(item)
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                label = {item}/>
            </li>
        )
    })

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    )
}
export default PostList