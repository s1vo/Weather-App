import React, {useState,setState, Component} from "react";
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import ApiWeather from "../../apiWeather/ApiWeather";
import "./style.css";

import Cloud from './../leftBar/img/cloudy.png';
import Sum from './img/sun.png';
import Rain from './img/rainy.png'
  

class SwipeCard extends Component {
    
    state = {
        weatherList: [],
        loading: true,
        error: false,
        visible: false,
        setVisible: false
    }

    apiWeather = new ApiWeather();

    componentDidMount() {
        this.apiWeather.getInfoWeather()
        .then(response => this.onListLoaded(response))
        .catch(err => console.error(err));
    }  

    onListLoaded = (weatherList) => {
        this.setState({
            weatherList,
            loading: false
        })
    }
    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        let i=0;
        const items =  arr.map((item) => {
            i++;
            const data = new Date(item.dt * 1000);
            console.log(item);
            const getDate = data.getDate(); 
            const Title = this.textMonth(data.getMonth()) +' ' + (getDate<10?'0'+getDate:getDate);

            let img = <img className="imgIcon" alt="Cloud" src={Sum}/>;
            if(Math.floor(item.humidity)<=70){
                img = <img className="imgIcon" alt="Cloud" src={Cloud}/>;
            }
            if(Math.floor(item.humidity)>71){
                img = <img className="imgIcon" alt="Cloud" src={Rain}/>;
            }
            const header = img;

            const footer = <span className="Footer">{Title}</span>;
            return (
                <div className="cards" key={i} >
                    <Card footer={footer} header={header} >

                        <div className="tempCard">
                            <span>+{Math.floor(item.temp_average_max)}</span>
                        </div>
                       
                    </Card>
                </div>

            )

        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <div className="wrapperCards">
                {items}
            </div>
        )
    }

    textMonth = (month) => {
        switch (month) {
            case 1:
                month = 'January' 
                break;
            case 2:
                month = 'February' 
                break;      
            case 3:
                month = 'March' 
                break;  
            case 4:
                month = 'April' 
                break;                  
            case 5:
                month = 'May' 
                break; 
            case 6:
                month = 'June' 
                break; 
            case 7:
                month = 'July' 
                break; 
            case 8:
                month = 'August' 
                break;
            case 9:
                month = 'September' 
                break;
            case 10:
                month = 'October' 
                break;
            case 11:
                month = 'November' 
                break;
            case 12:
                month = 'December' 
                break;
        }

        return month; 
    } 

    render(){
        const {weatherList, loading, error} = this.state;
        const items = this.renderItems(weatherList);

        return (
            <>
                <div className="swipeItems">
                   {items}
                </div>
         
            </>
          );
    }
}



export default SwipeCard;