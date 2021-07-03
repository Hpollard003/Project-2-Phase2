import React from 'react'

const Comments = (props) => (
    <div>

        <div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.text}</p>
            </div>
        </div>


    </div>
);

export default Comments