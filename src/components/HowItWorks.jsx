import React from 'react';
import MasterCard from '../images/mastercard.svg';
import Visa from '../images/visa.svg';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlowImg1 from '../images/girl-carrying-box.svg';
import ArrowImg from '../images/arrow.svg';
import ArrowImg2 from '../images/arrow2.png';
import FlowImg2 from '../images/scheduling.svg';
import FlowImg3 from '../images/pickup.svg';
import FlowImg4 from '../images/laundryservice.svg';
import FlowImg5 from '../images/delivery.svg';

function HowItWorks() {

   
  return (
    <>
      <div className="flow-wrapper">
          <div className="container-fluid">

              <div className="process-section">
                  <div className="text-right">
                      <h1 className="title">How It Works</h1>
                      <p>Its that easy!</p>
                  </div>

               
                  <div className="first_step step">
                        <div className="first_step_img img text-center">
                           <img src={FlowImg1} alt="" />
                        </div>
                        <div className="first_step_text text">
                           <h3><span>1.</span> Bag up your <br/>dirty laundry</h3>
                        </div>
                        <div className="first_step_arrow arrow">
                           <img src={ArrowImg} alt="" />
                        </div>
                </div>

                <div className="second_step step justify-content-end">
                        <div className="second_step_img img text-center">
                           <img src={FlowImg2} alt="" />
                        </div>
                        <div className="second_step_text text">
                           <h3><span>2.</span> Place a booking <br/>on laundryforclinics</h3>
                        </div>
                        <div className="second_step_arrow arrow">
                           <img src={ArrowImg2} alt="" />
                        </div>
                </div>

                <div className="third_step step">
                        <div className="third_step_img img">
                           <img src={FlowImg3} alt="" />
                        </div>
                        <div className="third_step_text text">
                           <h3><span>3.</span>  We arrive at your location <br/>for the pickup</h3>
                        </div>
                        <div className="third_step_arrow arrow">
                           <img src={ArrowImg} alt="" />
                        </div>
                </div>

                <div className="fourth_step step">
                        <div className="fourth_step_img img">
                           <img src={FlowImg4} alt="" />
                        </div>
                        <div className="fourth_step_text text">
                           <h3><span>4. </span>  We wash and fold <br/>your clothes</h3>
                        </div>
                </div>

                <div className="fifth_step step">
                        <div className="fifth_step_img img">
                           <img src={FlowImg5} alt="" />
                        </div>
                        <div className="fifth_step_text text">
                           <h3><span>5. </span> We bring back your fresh laundry <br/>to you on the same day</h3>
                        </div>
                        <div className="fifth_step_arrow arrow">
                           <img src={ArrowImg2} alt="" />
                        </div>
                </div>


              </div>
              <div className="pricing">
                  <h3 className='title'>Pricing</h3>
                  <h4 className='pricing_text'>$1.49 - $1.33/lb</h4>
                  <h5 className='charge_text'>+ $9.99 Service and Delivery</h5>
                  <ul className='keypoints'>
                    <li><FontAwesomeIcon icon={faCheck} /> 1 full garbage bag weighs between 25-30 lb</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Pay after we bring your clothes back to you clean</li>
                    <li><FontAwesomeIcon icon={faCheck} /> We email you an invoice after we pick up your laundry</li>
                    <li><FontAwesomeIcon icon={faCheck} /> Payment can be made by any credit card via email invoice</li>
                  </ul>
                  
                  <div className="payment_methods">
                      <img src={Visa} alt="" className='img-fluid'/>
                      <img src={MasterCard} alt="" className='img-fluid'/>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default HowItWorks;