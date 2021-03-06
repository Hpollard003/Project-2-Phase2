import React from 'react'


const Comment = (props) => (
    <div>
        <div className='card m-2 bg-primary bg-gradient'>
            <div className='text-center'>
            {/* this organizes the comment card using props */}
                <h3>{props.name}</h3>
                <p>{props.text}</p>

            </div>
        </div>
    </div>
);

export default Comment