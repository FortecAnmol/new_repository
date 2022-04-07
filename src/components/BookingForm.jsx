import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import { $ } from 'react-jquery-plugin';
import Dark_logo from '../images/logo-dark-bg.svg';
import loading_Img from '../images/caution.png';
function BookingForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShow] = useState(false);
    const [showModalp, setShowp] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);         
    const [mess, setMess] = useState("");
   
  function handleClosebook(){
   setShow(false);
   $('.box1').show();
   $('.box3').hide();
   $('.box2').hide();
   localStorage.clear();
   window.location.reload();
  }
    function handleSubmit(event) {
      
        event.preventDefault();
       // console.log(name +  email + phone +  message);
       setShowp(true);
       var month;
       var numberofcloth  = localStorage.getItem('numberofcloth');
       var newAddress = localStorage.getItem('newAddress');
       var time = localStorage.getItem('time');
       var data = '';
       var dataa;
                 /*        ANMOL        */
                 var test = [];
                 $(".rmdp-panel-body li span").each(function(index) {
                     test.push($(this).text());
         
                 })  
                 test.forEach(function(i, idx, test){
                     if (idx === test.length - 1){ 
                         data = test
                     }
                  });
                  console.log(data);
                  var regExp = /\(([^)]+)\)/g;
                  var newTxt = data.toString().split('(');
                  var new_data = [];
                  for (var i = 1; i < newTxt.length; i++) {
                     new_data.push(newTxt[i].split(')')[0]);
                  }
                  console.log(new_data)
                  var string = new_data.toString()
                  var string_split = string.split("/").toString()
                  var string_split_new = string_split.split(",")
                  console.log(string_split_new);
                  var products = [];
                  var months = [];
                  for (var i = 0; i < string_split_new.length; i += 2) {
                      products.push(string_split_new[i]);
                      string_split_new[i+1] && months.push(string_split_new[i + 1]);
                  }
                  console.log(months);
                  console.log(products);
       
                  let unique_months = products.filter((item, i, ar) => ar.indexOf(item) === i);
                  console.log(unique_months);
                 let arr = [];

                 for (let i = 0; i < string_split_new.length; i += 2) {
                 arr.push({
                     [string_split_new[i]]: string_split_new[i + 1]
                 });
                 }
                 console.log(arr);
                         var targetObject = {};
         
                 for(var iloop=0; iloop< arr.length; iloop++){
                 //get the keys in your object
                 var objectKeys = Object.keys(arr[iloop]);
         
                 //loop over the keys of the object
                 for(var jloop=0; jloop<objectKeys.length; jloop++){
                     //if the key is present in your target object push in the array 
                     if( targetObject[ objectKeys[jloop] ] ){
                     targetObject[objectKeys[jloop]].push( arr[iloop][objectKeys[jloop]] );
                     }else{
                     // else create a array and push inside the value
                     targetObject[objectKeys[jloop]] = []
                     targetObject[objectKeys[jloop]].push( arr[iloop][objectKeys[jloop]]     );
                     }
                 }
                 }
                 console.log(targetObject)
                 var dataa_new = [];
                 var html = '<form>'
                 for (var [key, value] of Object.entries(targetObject)) {
                     dataa_new.push(key+':'+value);
                 }
                 console.log(dataa_new);
                   /*        ANMOL        */
       const monthararr = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
       for (const [key, value] of Object.entries(monthararr)) {
           console.log(key, value);
           // eslint-disable-next-line no-loop-func
           $(".rmdp-header-values span:first-child").each(function(index) {
               // alert(index + ": " +   $(this).text().replaceAll(',', ''));
                if(key ==  $(this).text().replaceAll(',', '')){
                   dataa = key;
                }
            }) 
         }
        //  alert(dataa);
         
        var fullm = [];
        var dataa_new_latest = [];
        const montharar = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
        for (const [key, value] of Object.entries(montharar)) {
            console.log(key, value);
            unique_months.forEach(function(unique_months){
                if(key ==  unique_months){
                  fullm.push(value);
                }
              });
            // console.log(key, value);
            if(dataa ===  key){
                fullm =  value;
            }
          }
          console.log(fullm);
          var arrayLength = fullm.length;
          for (var i = 0; i < arrayLength; i++) {
              console.log(fullm[i]);
              var mothns = fullm[i];

              //Do something
          }
          console.log(dataa);

          const d = new Date();
          let year = d.getFullYear();

          

          function getTimeZone() {
            var offset = new Date().getTimezoneOffset(),
                o = Math.abs(offset);
            return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
        }
        //alert(month)
   
       
        $('.rmdp-selected .sd ').each(function(index,item){
         //alert(time.split(" ")[0]);
      for(var i = 0; i < arrayLength; i++){
      var bookingdate = year+"-"+fullm[i]+"-"+$(item).html()+"T"+time.split(" ")[0]+":00-0400";
        console.log(bookingdate);
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData();
        data.append('datetime', bookingdate);
        data.append('firstName', name);
        data.append('lastName', name);
        data.append('phone', phone);
        data.append('quantity', numberofcloth);
        data.append('notes', message);
        data.append('email', email);
        data.append('location', newAddress);
        console.log(data);
        var config = {
        method: 'post',
        url: 'https://fortecsalesforce.com/laundary/book.php',
        data : data
        };

        axios(config)
        .then(function (response) {
            setShow(true)
            setShowp(false);
            localStorage.setItem('remessage',JSON.stringify(response.data));
            setMess(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
      }

      }); 
      
     
    }
   
    return (
        <>
            <form onSubmit={handleSubmit} className="form bookingForm mt-4">

                     <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input required
                        type="text"
                        name="Name"
                        className="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        tabIndex="1"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required
                        name="email"
                        id="email"
                        className="email"
                        tabIndex="2"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="form-group">
                <label htmlFor="Phone">Phone no.</label>
                <input required
                    type="text"
                    name="Phone"
                    className="Phone"
                    tabIndex="3"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                </div>
                <div className="form-group">
                <label htmlFor="message">Notes</label>
                <textarea 
                    className="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <button type="submit" className="send btn w-100 btn_white">Book</button>
            </form>
      <Modal  className="output__modal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src={Dark_logo} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>{mess}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClosebook}>
            Book Again
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal  className="output__modal second_modal" show={showModalp}>
        <Modal.Body>
          <img className='feature-img' src={loading_Img} />
          Processing...
        </Modal.Body>

      </Modal>
        </>
    )
}

export default BookingForm;
