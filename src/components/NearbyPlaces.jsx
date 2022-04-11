import React from 'react'
import './../styles/nearbyPlaces.css';

export default function NearbyPlaces(props) {

        const nearbyPlaces = props.info.map((el) => (
                <div key={el.id} className='nearbyRow'>
                        <p id="nearbyName"> {el.name}</p>
                        <p id="nearbyAddress">{el.address.number} {el.address.street} Street, {el.address.city} {el.address.zip} </p> 
                </div>
        ))

        return (
                <div id='nearbyPlaces' className='info'>
                        <h1>{props.title}</h1>
                        {nearbyPlaces}
                        <div id="addMArgin"></div>
                </div>
        )
}