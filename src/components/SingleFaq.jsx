import React from 'react';

function SingleFaq(props) {
  return (
    <>
                <div className="single_faq">
                  <h3 className='title'>{props.title}</h3>
                  <p className='description'>{props.description}</p>
                </div>
    </>
  )
}

export default SingleFaq;