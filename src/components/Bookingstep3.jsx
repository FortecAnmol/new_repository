import React,{useState}  from 'react';
import Banner_img2 from '../images/folded-clothes.svg';
import Banner_img3 from '../images/plant2.svg';
import BookingForm from './BookingForm';

function Bookingstep3() {
    const [tripType, setTripType] = useState("8:00 AM");
    localStorage.setItem('time', tripType);

    const timeValue = () =>{
        
    }

    return (
        <>
            <div className="booking_form box3">
                <div className="row wrapper">
                    <div className="col-md-7">
                        <div className="wrapper">
                            <p>What time suits you?</p>
                            <ul className='list-inline d-flex times_options2'>
                                <li className='list-inline-item' onClick={() => {
                                    setTripType("8:00 AM");
                                }}><label><input type="radio" name="times1" value={tripType} onChange={timeValue} checked={tripType === "8:00 AM"} /><span >8:00 AM</span></label></li>
                                <li className='list-inline-item' onClick={() => {
            setTripType("10:00 AM");
          }}><label><input  type="radio" name="tripType" onChange={timeValue} checked={tripType === "10:00 AM"} value={tripType} /><span>10:00 AM</span></label></li>
                            </ul>
                            <h1 className='mt-4 heading'>Contact Details</h1>
                            <BookingForm />
                        </div>
                    </div>
                    <div className="col-md-3 px-0 offset-md-1 text-center d-flex align-items-between flex-column justify-content-between">
                        <div className="img1 text-center"><img src={Banner_img2} alt="" className='img-fluid' /></div>
                        <div className="text">
                            <p>Wash, Dry & Fold <br /> Same day service</p>
                            <div className='Pricing'>$1.49/lb</div>
                        </div>
                        <div className="img2"><img src={Banner_img3} alt="" className='img-fluid' /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookingstep3;
