import React from 'react'


const Comments = (props) => (
    <div>
        <div className='card m-2 bg-primary bg-gradient'>
            <div className='text-start'>
                <h3>{props.name}</h3>
                <p>{props.text}</p>

            </div>
        </div>
    </div>
);

export default Comments