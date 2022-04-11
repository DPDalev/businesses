import React from 'react';
import './../styles/info.css';

export default function Details(props) {
        return (
                <div id={props.title.toLowerCase()} className='info'>
                        <h1>{props.title}</h1>
                        <p>{props.firstLine}</p>
                        <p>{props.secondLine}</p>
                </div>
        )
}