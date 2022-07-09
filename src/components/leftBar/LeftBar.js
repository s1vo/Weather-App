import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import './leftBar.css';

//import Cloud from './img/cloudy.png';
import temp from './img/temperature.png';
import cloudy from './img/cloud-computing.png';
import Sun from '../wrapperBar/img/sun.png'

const LeftBar = () => {

    let date = new Date();
    let dayNow = date.getDay();

    const [dateTime, setDate] = useState(new Date());

    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);

   // Monday - понедельник Tuesday - вторник Wednesday - среда Thursday - четверг Friday - пятница Saturday - суббота Sunday
    const whatDayNow = (numberDay) => {
        let day='';
        switch(numberDay){
            case 0:
                day = "Sunday"
                break;
            case 1:
                day = "Monday"
                break;
            case 2:
                day = "Tuesday"
                break;
            case 3:
                day = "Wednesday"
                break; 
            case 4: 
                day = "Thursday"
                break;
            case 5: 
                day = "Friday"
                break; 
            case 6: 
                day = "Saturday"
                break; 
        }
        return day;
    }

    return(
        <div className="leftBar">
            <div className="place">
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Search for plaсes..." />
                </span>
            </div>

            <div className="tempNow">
                <img src={Sun} alt="Cloud" />
                <span class="mt-4">+23°C</span>
            </div>

            <div className="timeNow">
                <span > {whatDayNow(dayNow)} {date.toLocaleTimeString()}</span>
            </div>

            <div className="infoTemp">
                <img src={temp} alt="temp" /> <span> Feels like 19°C </span>  
            </div>
            <div className="infoTemp">
                <img src={cloudy} alt="temp" /> <span> Cloudly -85% </span>  
            </div>


            <div className="location">
                <span>Russia, Moscow </span>
            </div>

        </div>
    )
}
export default LeftBar