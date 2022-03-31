import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Reviews(props) {
  return (
      <>
      <div className="single_reviews col-md-6">
          <div className="inner">
              <h3 className="person_name">{props.person_name}</h3>
              <div className="stars" data-count={props.rating}>
                 <span><FontAwesomeIcon icon={['fas', 'star']}/></span>
                 <span><FontAwesomeIcon icon={['fas', 'star']}/></span>
                 <span><FontAwesomeIcon icon={['fas', 'star']}/></span>
                 <span><FontAwesomeIcon icon={['fas', 'star']}/></span>
                 <span><FontAwesomeIcon icon={['fas', 'star']}/></span>
                 <div className="rating_progress"></div>
              </div>
              <div className="review-content">
             {props.content}
              </div>
              <img src={props.brand_img} alt="" />
          </div>
      </div>      
      </>
  )
}

export default Reviews;
