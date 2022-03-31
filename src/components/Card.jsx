import React from 'react';


function Card(props){
    return (
        <>
        <div className="feature_box col-md-4">
            <div className="inner">
                <img src={props.featureimg} alt="" />
            <div className="title">{props.title}</div>
            <p className="description">{props.description}</p>
            </div>
        </div>
        </>
    )
}

export default Card