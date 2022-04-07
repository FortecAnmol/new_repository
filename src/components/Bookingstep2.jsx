import React,{useState}from 'react';
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

import 'react-calendar/dist/Calendar.css';
const list = [
    {
      id: '1',
      name: '1',
    },
    {
      id: '2',
      name: '2',
    },
    {
        id: '3',
        name: '3',
      },
      {
        id: '4',
        name: '4',
      },
      {
        id: '5',
        name: '5',
      },
      {
        id: '6',
        name: '6',
      },
      {
        id: '7',
        name: '8',
      },
      {
        id: '9',
        name: '9',
      },
      {
        id: '10',
        name: '10',
      }
  ];
function Bookingstep2() {
  const [tripType, setTripType] = useState("1");
  localStorage.setItem('numberofcloth', tripType);
    const [date, setDate] = useState(new Date());
    // const [time, setTime] = useState("hello");
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var y =String(today.getDate()).padStart(2, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var daysInMonth = new Date(y,m,1,-1).getDate();
 
    var month = date.toLocaleString('default', { month: 'short' });
    var day = date.getUTCDate() + 1;
    localStorage.setItem('day', `${day}`);
    //localStorage.setItem('month', `${month}`);
    // console.log(`${month}: ${day}`);
    function Search() {
        return (
            <div className='app'>
                <div className='calendar-container' id='booking-calendar'>
                   { /* <Calendar onChange={setDate} value={date} /> */}
                   <Calendar multiple format="YYYY/(MMMM/D)" plugins={[<DatePanel  />]} minDate={new Date().setDate(dd)}/>
                 </div>
                <div className="row bottom_btns no-gutters mx-0">
                   <div className="col-6 pr-2"><button type="button" className="btn previous">Back</button></div>
                   <div className="col-6 pl-2"><button type="button" className="btn next">Next</button></div>
                </div>
                {/* <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
                </p> */}
            </div>
        );
    }

    return (
        <>
            <div className="calendar_wrapper booking-box box2">
                <div className="box-header">
                    <div className="selected-location mb-3"><div> <span className='current-location'></span><span className='selected date_selectedmonth'></span> <span className='selected date_selected'></span></div></div>
                    <h1><span className='selectedTime'>Select the dates</span></h1>
                </div>
                <div className="box-body">
                    <p className='tip'><strong>Tip!</strong><br/>Get a cheaper rate on booking for 5 or more days.</p>
                    {/* <ul className='list-inline d-flex justify-content-between times_options'>
                    {list.map((item) => (
                        <li className='list-inline-item' onClick={() => {
                          setTripType(item.name);
                      }} key={item.id}><label><input type="radio" value={tripType}   checked={tripType == item.name} name="times" /><span>{item.name}</span></label></li>
                    ))}                 
                    </ul> */}

                    <Search defaultValue={''} />
                </div>
            </div>
        </>
    )
}

export default Bookingstep2;
