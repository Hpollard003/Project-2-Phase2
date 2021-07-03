import React from 'react'

const Comments = (props) => (
  <div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>


  </div>
);

export default Comments