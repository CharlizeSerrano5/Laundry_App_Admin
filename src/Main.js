import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Maintenance from './Pages/MaintenancePage'
import Service from './Pages/ServicePage'


function Main(){
    // Create a Router that will maintain all of the pages to direct to
    return(
        <div>
            <BrowserRouter>
                <Routes> 
                    <Route path="/" element={<Service></Service>}/>
                    <Route path="/Service" element={<Service></Service>}/>
                    <Route path="/Maintenance" element={<Maintenance></Maintenance>}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    )
    
}

export default Main;