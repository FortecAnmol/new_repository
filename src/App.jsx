import React from 'react';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


import {
    Header,
    Footer,
    Home,
    Faqs,
    HowItWorks
  } from "./components";
  library.add(fab, fas, far);


function App() {
  
  return (
       <>

        <Header />
        <Routes>
          <Route exact path="/laundry2" element={<Home/>}/>
          <Route exact path="/laundry2/howitworks" element={<HowItWorks/>}/>
          <Route exact path="/laundry2/help" element={<Faqs/>}/>
        </Routes>
        <Footer />
    
       </>
  )
}

export default App
  