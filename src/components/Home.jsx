import React,{useState} from 'react';
import data from '../Data';
import Card from './Card';
import { Modal, Button } from "react-bootstrap";
import Reviews from './Reviews';
import Map from './Map';
import ReviewsData from './ReviewsData';
import Bookingstep2 from './Bookingstep2';
import Bookingstep3 from './Bookingstep3';
import { $ } from 'react-jquery-plugin';
import Dark_logo from '../images/logo-dark-bg.svg';

function Home() {
    const [showModalD , setShow] = useState(false);
    const handleClose = () => setShow(false);
    $(document).on('click', '.times_options2 input[type="radio"]', function () {
        var radio_value = $(this).val();
        // alert(radio_value);
        $('.selectedTime').text(radio_value);
    });
    $(document).on('submit', '.search_form', function () {
        $('.box1').hide();
        $('.box2').show();

    });

    $(document).on('click', '.next', function () {
        var data = '';
        var dataa;

        // alert(dataa);


        if ($('.rmdp-selected').length == 2) {
            setShow(true);
            return false;
          }
        const montharar = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
        for (const [key, value] of Object.entries(montharar)) {
            console.log(key, value);
            // eslint-disable-next-line no-loop-func

            $(".rmdp-header-values span:first-child").each(function(index) {
                // alert(index + ": " +   $(this).text().replaceAll(',', ''));
                 if(key ==  $(this).text().replaceAll(',', '')){
                    dataa = key;
                }
             }) 
          }
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
         console.warn(data);
         var regExp = /\(([^)]+)\)/g;
         var newTxt = data.toString().split('(');
         var new_data = [];
         for (var i = 1; i < newTxt.length; i++) {
            new_data.push(newTxt[i].split(')')[0]);
         }
         console.log(new_data)
        const monthar = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
        var dataa_new = [];
        for (const [key, value] of Object.entries(monthar)) {
            console.log(key, value);
            // eslint-disable-next-line no-loop-func
                // alert(index + ": " +   $(this).text().replaceAll(',', ''));
                new_data.forEach(function(new_data){
                    if(value ==  new_data){
                        dataa_new.push(key);
                    }
                 });
          }
          console.warn(dataa_new);
        // var string = test.toString()
        // var string_split = string.split("/")
        // console.warn(string_split);

        // var products = [];
        // var months = [];
        // for (var i = 0; i < string_split.length; i += 2) {
        //     products.push(string_split[i]);
        //     string_split[i+1] && months.push(string_split[i + 1]);
        // }
        // console.warn(months);
        // let unique_months = months.filter((item, i, ar) => ar.indexOf(item) === i);
        // console.log(unique_months);
        // const monthar = {January:1,February:2,March:3,April:4,May:5,June:6,July:7,August:8,September:9,October:10,November:11,December:12};
        // var dataa_new = [];
        // for (const [key, value] of Object.entries(monthar)) {
        //     console.log(key, value);
        //     // eslint-disable-next-line no-loop-func
        //         // alert(index + ": " +   $(this).text().replaceAll(',', ''));
        //         unique_months.forEach(function(unique_months){
        //             if(value ==  unique_months){
        //                 dataa_new.push(key);
        //             }
        //          });
        //   }
        //   console.warn(dataa_new);

               
                data = test
            }
         });

          /*        ANMOL        */



        //   alert(dataa);
          var array = [];
        $(".rmdp-selected .sd").each(function(index) {
            array.push($(this).text());
            //data += ' ' + $(this).text() + ',';
        })  

        array.forEach(function(i, idx, array){
            if (idx === array.length - 1){ 
               // alert("Last callback call at index " + idx + " with value " + array ); 
                data = array
            }
         });
         
        //  alert(array);
        //  alert(dataa);
        $(".date_selectedmonth").text(dataa + ' :');
        $('.date_selectedmonth').show();
        $(".date_selected").text(data);
        $('.selected-location').addClass('active');
        $('.box3').fadeIn('1000');
        $('.date_selected').show();
        $('.bottom_btns').hide();
        $('.box2').addClass('margin-bttom');
    });

    $(document).on('click', '.previous', function () {
        $('.box1').show();
        $('.box2').hide();
        $('.box3').fadeOut('1000');
    });

    $(document).on('click', '.current-location', function () {
        $('.box2').hide();
        $('.box3').fadeOut('1000');
        $('.box1').show();
        localStorage.removeItem('newAddress');
        $('.bottom_btns').show();
        //alert("sdfsf");
        $('.box2').removeClass('margin-bttom');
    });
    
    $(document).on('click', '.date_selected', function () {
        $(this).hide();
        $('.date_selectedmonth').hide();
        $('.selected-location').removeClass('active');
        $('.box3').fadeOut('1000');
        $('.box2').show();
        $('.bottom_btns').show();
        $('.box2').removeClass('margin-bttom');
    });
    
    // .current-location
    function handleClosebook(){
        setShow(false);
       }

    return (
        <>

            <div className="booking-wrapper">
                <div className="offer-ticker">
                    for as low as <span>$1.33/lb</span>
                </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pos_unset form_side">
                            <div className="inner">
                                <div className="booking-box box1">
                                    <div className="box-header">
                                        <h1>Where can we pick up your laundry?</h1>
                                    </div>
                                    <div className="box-body">
                                    <Map/>
                                    </div>
                                </div>
                                <Bookingstep2 />
                            </div>
                            <Bookingstep3 />

                        </div>
                        <div className="col-lg-6 caption_side">
                            <div className="intro_text">
                                <h1 className="sub_title">Got business to run and <br />stuck doing laundry?</h1>
                                <h2 className="title">We got you!</h2>
                                <p>We pick up your dirty laundry and bring it back to you clean, folded and sorted, all on the same day.</p>
                                <p>Still got questions?</p>
                                <a href="tel:(416) 984-4659" className="btn btn-white">Call us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features_wrapper">

                <div className="container-fluid">
                    <h1 className="section_title">One stop for all your laundry needs</h1>
                    <div className="row">
                        {data.map((props) => (
                            <Card title={props.title} featureimg={props.featureimg} description={props.description} key={props.id}/>
                        ))}
                    </div>
                </div>
            </div>


            <div className="reviews_wrapper">
                <div className="container-fluid">
                    <h1 className="section_title">Hear from people who love our service</h1>
                    <div className="row">
                        {ReviewsData.map((props) => (
                            <Reviews person_name={props.person_name} rating={props.rating} content={props.content} brand_img={props.brand_img} key={props.id}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-fluid cta_wrapper">
                <div className="cta">
                    <h2 className="section_title">Have <br />Questions?</h2>
                    <a href="tel:(416) 984-4659" className="btn btn-white">Call us</a>
                </div>
            </div>
            <Modal  className="output__modal" show={showModalD} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src={Dark_logo} /></Modal.Title>
        </Modal.Header>
        <Modal.Body>Kindly select at least one date</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    );
}


export default Home;