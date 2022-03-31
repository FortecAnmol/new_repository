import React from 'react';
import SingleFaq from './SingleFaq';
import ContactForm from './ContactForm';
import FaqImg from '../images/girl-carrying-box.svg'

const FaqData = [
    {
       id: '1',
       title: 'Q: How does payment work?',
       description: 'You can pay after we drop off your laundry. We accept any kind of credit card. We will pick up your clothes and send you an email invoice based on total weight of your laundry. Costs are calculated based on $1.49/lb, plus $9.99 for service and delivery. You can pay via the email invoice we send to you.',
},
{
    id: '2',
    title: 'Q: Where do my clothes get picked up and dropped off?',
    description: 'We come to you. Please include your address and any details during scheduling. The driver will call you to confirm details before heading your way for pick up and drop-off. Contactless pick up and drop off available.',
},
{
    id: '3',
    title: 'Q: How long does it take to bring back my clothes?',
    description: 'We do same day service and try our best to bring your clean clothes back to you within 3 hours.',
},
{
    id: '4',
    title: 'Q: Do you also provide dry cleaning or ironing services?',
    description: 'Not at this time. We will start providing dry cleaning and ironing services in the near future. Right now, we are a full-service wash, dry, fold, sort laundry provider with pick up and delivery.',
},
{
    id: '5',
    title: 'Q: What type of clothes do you clean?',
    description: 'All clothes that are safe in a washer dryer. We can also wash bedding, comforters, bathroom/door mats, towels, etc. Throw it all in a bag and we will take care of it for you.',
},
{
    id: '6',
    title: 'Q: What temperature do you wash my clothes in?',
    description: 'Elevated temperatures in our washes inactivate microbes and viruses on fabrics and garments. We can accommodate if you have specific temperature  equirements let us know at the time of booking.',
},
{
    id: '7',
    title: 'Q: What detergent and fabric softener do you use?',
    description: 'We use Tide or Gain detergent and Downy for the softener. Please let us know if you have specific requirements around hypoallergenic, nonfragrance, babies and skin sensitives and we can accommodate as per your request upon booking.',
},
{
    id: '8',
    title: 'Q: Do you use bleach when washing whites?',
    description: 'Yes we do.',
},
]

function Faqs(props) {
    
  return (
    <>
       <section className='faq-section'>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-6 col-md-7">
                     <div className="faq-wrapper">
                         {FaqData.map((props) => (
                         <SingleFaq title={props.title} description={props.description} key={props.id}/>
                         ))}
                     </div>
                     <div className="contact-wrapper">
                             <p>Still have questions?</p>
                             <h3>Write to us</h3> 
                             <ContactForm />
                         </div>
                  </div>
                  <div className="col-lg-4 col-md-4 offset-lg-2 offset-md-1">
                      <h3 className='large_heading'>FAQs</h3>
                      <img src={FaqImg} alt="" className='img-fluid d-none d-md-block'/>
                  </div>
              </div>
          </div>
       </section>
    </>
  )
}

export default Faqs;