import React from 'react'

export default function(props) {
    return (
        <div>
            {props.friends.map((friends) =>
                <div> 
                    <p>{friends.name}</p>
                    <p>{friends.age}</p>
                    <p>{friends.email}</p>
                </div>
                )}
        </div>
    )
}    